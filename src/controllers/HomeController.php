<?php

/**
 * The HomeController is a user-defined controller. Should be in charge of managing the home.
 */
class HomeController extends Controller {

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
     * @var HomeModel The instance of HomeModel.
     */
    protected $model;

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
        parent::__construct();
        $this->model = HomeModel::singleton();
    }

    /**
     * Returns the instance of the model for this controller
     *
     * @return \HomeModel
     */
    public function getModel() {
        return $this->model;
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
//         die($sectionContent);
        $saved = file_put_contents($fileName['public'], json_encode(json_decode($sectionContent, true), JSON_PRETTY_PRINT));

        if ($saved === false) {
            $this->header(400);
            die("{ \"message\": \"Couldn't save to file <{$fileName['src']} and {$fileName['public']}>\" }");
        } else {
            die("{ \"message\": \"Data saved in <{$fileName['src']} and {$fileName['public']}>\" }");
        }
    }

    private function getSection($section) {
        $fileName = HomeController::SECTIONS[$section];
        if (!$fileName) {
            $this->header(400);
            die("{ \"error\": \"Section <$section> does not exist\" }");
            // die("{ \"error\": \"Could not retrieve DATA from file <$fileName>\" }");
        }
        return [
            'src' => __ROOT__ . '/src/data/' . $fileName,
            'public' => __ROOT__ . '/public/json/' . $fileName
        ];
    }
}
