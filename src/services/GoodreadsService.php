<?php

class GoodreadsService {

    private $API_KEY = 'g2GIzc6vbVUy7CtMt7HndQ';
    private $userId = '48022935';
    private $imgUrlPreg = '/(\._S[A-Z])([0-9]{1,3})(_.jpg)/';


    /**
     * @var Model The class instance.
     * @internal
     */
    protected static $instance;

    /**
     * Returns a Model instance, creating it if it did not exist.
     * @return Model
     */
    public static function singleton()
    {
        if (!self::$instance) {
            $v = __CLASS__;
            self::$instance = new $v;
        }
        return self::$instance;
    }

    /**
     * $result = $xml->xpath('/a/b/c');
     * print($xmlDoc->xpath("//a:message")[0]);
     * $result = $xml->xpath("//size[@label='Large']");
     */
    public function getCurrentlyReading () {
        $url = "https://www.goodreads.com/review/list?v=3&key={$this->API_KEY}&id={$this->userId}&shelf=currently-reading";
        $result = $this->toArray($this->get($url));

        $books = [];

        for ($i = 0; $i < count($result['books']['book']); ++$i) {
            $book = $result['books']['book'][$i];
            $books[] = [
                'title' => $book['title'],
                'pages' => $book['num_pages'],
                'descr' => strip_tags(substr($book['description'], 0, 150)),
                'link'  => $book['link'],
                'image' => preg_replace($this->imgUrlPreg, '${1}500${3}', $book['image_url'])
            ];
        }

        return $books;

    }


    public function get($url) {
        // create curl resource
         $ch = curl_init();

         // set url
         curl_setopt($ch, CURLOPT_URL, $url);

         //return the transfer as a string
         curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

         // $output contains the output string
         $output = curl_exec($ch);

         // close curl resource to free up system resources
         curl_close($ch);

         return $output;
    }

    /**
     * Converts the XML to an array
     */
    public function toArray($result) {
        $xml = simplexml_load_string($result);
        $json = json_encode($xml);
        return json_decode($json,TRUE);
    }
}
