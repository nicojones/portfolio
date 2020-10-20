<?php

class GoodreadsService {

    private $API_KEY = 'g2GIzc6vbVUy7CtMt7HndQ';
    private $userId = '48022935';
//     private $readShelfId = '156243802';
    private $imgUrlPreg = '/(\._S[A-Z])([0-9]{1,3})(_.jpg)/';
    private $maxLengthDescription = 500;
    private $noDescriptionMessage = '(no description provided by Goodreads)';


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
        $url = "https://www.goodreads.com/review/list?";

        $query = http_build_query([
            'key' => $this->API_KEY,
            'v' => 3,
            'shelf' => 'currently-reading',
            'id' => $this->userId
        ]);

        $result = $this->toArray($this->get($url . $query));

        $books = [];

        for ($i = 0; $i < count($result['books']['book']); ++$i) {
            $book = $result['books']['book'][$i];
            $books[] = [
                'title' => $book['title'],
                'pages' => $book['num_pages'],
                'descr' => $this->shortDesc($book['description']),
                'link'  => $book['link'],
                'order' => 'd',
                'image' => preg_replace($this->imgUrlPreg, '${1}500${3}', $book['image_url'])
            ];
        }

        return array_reverse($books);
    }

    public function getReadBooks ($page, $perPage = 50) {
        $lastYear = (date('Y') - 1) . '';

        $url = "https://www.goodreads.com/review/list?";

        $query = http_build_query([
            'id' => $this->userId,
            'key' => $this->API_KEY,
            'v' => 2,
            'shelf' => 'read',
            'per_page' => $perPage,
            'page' => $page,
            'sort' => 'date_read',
            'order' => 'd'
        ]);

        // die($this->get($url . $query));
        $result = $this->toArray($this->get($url . $query));
        $books = [];


        for ($i = 0; $i < count($result['reviews']['review']); ++$i) {
            $book = $result['reviews']['review'][$i]['book'];

            // Only add books that i read this year or last year.
            if (
              $result['reviews']['review'][$i]['read_at'] &&
              is_string($result['reviews']['review'][$i]['read_at']) &&
              substr($result['reviews']['review'][$i]['read_at'], -4) >= $lastYear
            ) {
                $books[] = [
                    'title' => $book['title'],
                    'pages' => $book['num_pages'],
                    'descr' => $this->shortDesc($book['description']),
                    'link'  => $book['link'],
                    'image' => preg_replace($this->imgUrlPreg, '${1}500${3}', $book['image_url'])
                ];
            }
        }
//         var_dump($books);
//         die;

        return [
            '_info' => 'Since January ' . $lastYear,
            'page' => (int) $page,
            'totalRead' => (int) $result['reviews']['@attributes']['total'],
            'lastYear' => count($books),
            'read' => $books
        ];
    }


    private function get($url) {
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
    private function toArray($result) {
        $xml = simplexml_load_string($result);
        $json = json_encode($xml);
        return json_decode($json,TRUE);
    }

    private function shortDesc($description) {
        if (is_array($description)) {
            return $this->noDescriptionMessage;
        }
        $description = preg_replace('/[\x00-\x1F\x7F-\xFF]/', '', $description);
        if (strlen($description) > $this->maxLengthDescription) {
            return strip_tags(substr($description, 0, $this->maxLengthDescription)) . '...';
        }
        else {
            return strip_tags($description);
        }
    }
}
