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

    public function getMyWorkPage () {
        $title = 'what drives me?';
        $text = [
            [ 'type' => 'p', 'content' => '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At Zeno eum non beatum modo, sed etiam divitem dicere
                   ausus est. Atqui perspicuum est hominem e corpore animoque constare, cum primae sint animi partes, secundae
                   corporis. Duo Reges: constructio interrete. Atque haec coniunctio confusioque virtutum tamen a philosophis
                   ratione quadam distinguitur. Ut optime, secundum naturam affectum esse possit. Faceres tu quidem, Torquate,
                   haec omnia; Tecum optime, deinde etiam cum mediocri amico. Sed nonne merninisti licere mihi ista probare,
                   quae sunt a te dicta? </p>'],

            [ 'type' => 'p', 'content' => '<blockquote cite="http://loripsum.net">
                   Alia quaedam dicent, credo, magna antiquorum esse peccata, quae ille veri investigandi cupidus nullo modo ferre potuerit.
                 </blockquote>'],

            [ 'type' => 'p', 'content' => '<p>Cum audissem Antiochum, Brute, ut solebam, cum M. <i>Ego vero isti, inquam, permitto.</i>
                   <a href="http://loripsum.net/" target="_blank">Quantum Aristoxeni in musicis?</a>
                   Iam id ipsum absurdum, maximum malum neglegi.
                   <b>Ita multa dicunt, quae vix intellegam.</b></p>'],


            [ 'type' => 'p', 'content' => '<p>Illa tamen simplicia, vestra versuta. Itaque his sapiens semper vacabit. Sed emolumenta communia esse
                   dicuntur, recte autem facta et peccata non habentur communia. Istam voluptatem, inquit, Epicurus ignorat?
                   Mihi quidem Antiochum, quem audis, satis belle videris attendere. Efficiens dici potest. Si stante, hoc
                   natura videlicet vult, salvam esse se, quod concedimus; Unum est sine dolore esse, alterum cum voluptate. </p>']
        ];
        $this->json([
            'title' => $title,
            'text' => $text
        ]);
    }

    public function getAboutPage () {
        $title = [
            'first' => 'mathematician',
            'multi' => ['+', 'turned', 'and'],
            'last' => 'web developer',
            'period' => '.'
        ];
        $text = [
            [ 'type' => 'p', 'content' => '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At Zeno eum non beatum modo, sed etiam divitem dicere
                   ausus est. Atqui perspicuum est hominem e corpore animoque constare, cum primae sint animi partes, secundae
                   corporis. Duo Reges: constructio interrete. Atque haec coniunctio confusioque virtutum tamen a philosophis
                   ratione quadam distinguitur. Ut optime, secundum naturam affectum esse possit. Faceres tu quidem, Torquate,
                   haec omnia; Tecum optime, deinde etiam cum mediocri amico. Sed nonne merninisti licere mihi ista probare,
                   quae sunt a te dicta? </p>'],

            [ 'type' => 'p', 'content' => '<blockquote cite="http://loripsum.net">
                   Alia quaedam dicent, credo, magna antiquorum esse peccata, quae ille veri investigandi cupidus nullo modo ferre potuerit.
                 </blockquote>'],

            [ 'type' => 'p', 'content' => '<p>Cum audissem Antiochum, Brute, ut solebam, cum M. <i>Ego vero isti, inquam, permitto.</i>
                   <a href="http://loripsum.net/" target="_blank">Quantum Aristoxeni in musicis?</a>
                   Iam id ipsum absurdum, maximum malum neglegi.
                   <b>Ita multa dicunt, quae vix intellegam.</b></p>'],


            [ 'type' => 'p', 'content' => '<p>Illa tamen simplicia, vestra versuta. Itaque his sapiens semper vacabit. Sed emolumenta communia esse
                   dicuntur, recte autem facta et peccata non habentur communia. Istam voluptatem, inquit, Epicurus ignorat?
                   Mihi quidem Antiochum, quem audis, satis belle videris attendere. Efficiens dici potest. Si stante, hoc
                   natura videlicet vult, salvam esse se, quod concedimus; Unum est sine dolore esse, alterum cum voluptate. </p>']
                        ];
        $this->json([
            'title' => $title,
            'text' => $text
        ]);
    }

    public function getContactMePage () {
        $title = 'Interested?<br> Sounds <span class="accent">great!</span>';
        $text = [
            [ 'type' => 'p', 'content' => '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At Zeno eum non beatum modo, sed etiam divitem dicere
                   ausus est. Atqui perspicuum est hominem e corpore animoque constare, cum primae sint animi partes, secundae
                   corporis. Duo Reges: constructio interrete. Atque haec coniunctio confusioque virtutum tamen a philosophis
                   ratione quadam distinguitur. Ut optime, secundum naturam affectum esse possit. Faceres tu quidem, Torquate,
                   haec omnia; Tecum optime, deinde etiam cum mediocri amico. Sed nonne merninisti licere mihi ista probare,
                   quae sunt a te dicta? </p>'],

            [ 'type' => 'p', 'content' => '<blockquote cite="http://loripsum.net">
                   Alia quaedam dicent, credo, magna antiquorum esse peccata, quae ille veri investigandi cupidus nullo modo ferre potuerit.
                 </blockquote>'],

            [ 'type' => 'p', 'content' => '<p>Cum audissem Antiochum, Brute, ut solebam, cum M. <i>Ego vero isti, inquam, permitto.</i>
                   <a href="http://loripsum.net/" target="_blank">Quantum Aristoxeni in musicis?</a>
                   Iam id ipsum absurdum, maximum malum neglegi.
                   <b>Ita multa dicunt, quae vix intellegam.</b></p>'],


            [ 'type' => 'p', 'content' => '<p>Illa tamen simplicia, vestra versuta. Itaque his sapiens semper vacabit. Sed emolumenta communia esse
                   dicuntur, recte autem facta et peccata non habentur communia. Istam voluptatem, inquit, Epicurus ignorat?
                   Mihi quidem Antiochum, quem audis, satis belle videris attendere. Efficiens dici potest. Si stante, hoc
                   natura videlicet vult, salvam esse se, quod concedimus; Unum est sine dolore esse, alterum cum voluptate. </p>']
        ];
        $links = [
            ['text' => 'My Curriculum', 'url' => ''],
            ['text' => 'GitHub', 'url' => 'https://github.com/nicojones'],
            ['text' => 'YouTube', 'url' => 'https://youtube.com/user/njrubik'],
            ['text' => 'LinkedIn', 'url' => 'https://www.linkedin.com/in/nico-kupfer/'],
        ];
        $this->json([
            'title' => $title,
            'text' => $text,
            'links' => $links
        ]);
    }
}
