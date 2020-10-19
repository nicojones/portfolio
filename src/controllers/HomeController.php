<?php

/**
 * The HomeController is a user-defined controller. Should be in charge of managing the home.
 */
class HomeController extends Controller {

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

    public function getMyWork () {
        $title = 'what drives me?';
        $text = [
            'hello!<br>with <b>bold</b> even...',
            'hello!<br>with <b>bold</b> even...',
            'hello!<br>with <b>bold</b> even...',
            'hello!<br>with <b>bold</b> even...',
        ];
        $this->json([
            'title' => $title,
            'text' => $text
        ]);
    }
}
