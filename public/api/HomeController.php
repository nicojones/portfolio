<?php

/**
 * The HomeController is a user-defined controller. Should be in charge of managing the home.
 */
class HomeController {

    const SECTIONS = [
        'home' => 'home-section.json',
        'work' => 'work-section.json',
        'about' => 'about-section.json',
        'contact' => 'contact-section.json'
    ];

    /**
     * @var HomeController The class instance.
     * @internal
     */
    protected static $instance;

    /**
     * Returns a HomeController instance, creating it if it did not exist.
     *
     * @return HomeController
     */
    public static function singleton() {
        if (!self::$instance) {
            $v = __CLASS__;
            self::$instance = new $v;
        }
        return self::$instance;
    }

    /**
     * The __constructor for the class
     * Instantiates the HomeModel
     */
    public function __construct() {
    }

    public function getJSON() {
        $fileName = $this->getSection($_GET['section']);

        die(file_get_contents($fileName['src']));
    }

    public function saveJSON () {
        $fileName = $this->getSection($_POST['section']);
        // All well, section is valid
        $sectionContent = $_POST['content'];


        // save contents as they come. We save them unrendered.
        $saved = file_put_contents($fileName['src'], json_encode(json_decode($sectionContent, true), JSON_PRETTY_PRINT));

        // only replace the public one! We save it rendered
        $sectionContent = preg_replace('/\{\{([^\}]+)\}\}/', '<span class=\"accent\">$1</span>', $sectionContent);
        // allow [[IMG_URL|img_description]]
        $sectionContent = preg_replace('/\[\[([^\]\|]+)(\|([^\]]+))?\]\]/', '<img class=\"project-image\" src=\"$1\" matTooltip=\"$3\" alt=\"$3\"></span>', $sectionContent);
//         $sectionContent = preg_replace('/\[\[([^\]\|]+)(\|([^\]]+))?\]\]/', '<span class=\"project-image\" style=\"background-image:url($1)\" matTooltip=\"$3\"><img class=\"project-image-img\" src=\"$1\"></span>', $sectionContent);
        $sectionContent = preg_replace('/<p>[ \n]*<\/p>/', '', $sectionContent);

        $saved = file_put_contents($fileName['public'], json_encode(json_decode($sectionContent, true), JSON_PRETTY_PRINT));

        if ($saved === false) {
            http_response_code(400);
            die("{ \"message\": \"Couldn't save to file <{$fileName['src']} and {$fileName['public']}>\" }");
        } else {
            die("{ \"message\": \"Data saved in <{$fileName['src']} and {$fileName['public']}>\" }");
        }
    }

    private function getSection($section) {
        $fileName = HomeController::SECTIONS[$section];
        if (!$fileName) {
            http_response_code(400);
            die("{ \"error\": \"Section <$section> does not exist\" }");
            // die("{ \"error\": \"Could not retrieve DATA from file <$fileName>\" }");
        }
        return [
            'src' => __ROOT__ . '/public/api/json/' . $fileName,
            'public' => __ROOT__ . '/public/json/' . $fileName
        ];
    }
}
