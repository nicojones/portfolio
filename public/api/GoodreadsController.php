<?php

/**
 * GoodreadsController seems a cool idea
 */
 class GoodreadsController
 {

    /**
     * @var GoodreadsController The class instance.
     * @internal
     */
    protected static $instance;

    protected $goodreadsService;

    /**
     * Returns a GoodreadsController instance, creating it if it did not exist.
     * @return GoodreadsController
     */
    public static function singleton() {
        if (!self::$instance) {
            $v = __CLASS__;
            self::$instance = new $v;
        }
        return self::$instance;
    }

    /**
     * Constructor for the class GoodreadsController
     */
    public function __construct() {
        $this->goodreadsService = GoodreadsService::singleton();
    }

    public function getCurrentlyReading () {
        $file = __ROOT__ . '/public/json/reading.json';
        if (time() - filemtime($file) > JSON_CACHE) {
            $books = $this->goodreadsService->getCurrentlyReading();
            $books['_last_update'] = date('Y-m-d H:i');
            $saved = file_put_contents($file, json_encode($books, JSON_PRETTY_PRINT));
            $books['_updated'] = true;
        } else {
            $books = json_decode(file_get_contents($file));
        }
        json($books);
    }

    public function getRead () {
        $file = __ROOT__ . '/public/json/read.json';

        if (time() - filemtime($file) > JSON_CACHE) {
            $books = $this->goodreadsService->getReadBooks();
            $books['_last_update'] = date('Y-m-d H:i');
            $saved = file_put_contents($file, json_encode($books, JSON_PRETTY_PRINT));
            $books['_updated'] = true;
        } else {
            $books = json_decode(file_get_contents($file));
        }

        json($books);
    }
}
