<?php

/**
 * GoodreadsController seems a cool idea
 */
 class GoodreadsController extends Controller
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
        parent::__construct();
        $this->goodreadsService = GoodreadsService::singleton();
    }

    public function getCurrentlyReading () {
        $books = $this->goodreadsService->getCurrentlyReading();
//         var_dump($books);
        $this->json($books);
    }

    public function getRead () {
        $page = $this->getGet('page');
        $books = $this->goodreadsService->getReadBooks($page);
//         var_dump($books);die;
//         var_dump($books);
        $this->json($books);
    }
}
