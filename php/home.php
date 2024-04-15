<?php
    require 'vendor/autoload.php';
    use Storyblok\Client;
    $client = new Client('W1vLyxT5rQ15jBpANjnv0gtt');
    $data = $client->getStoryBySlug('home')->getBody();
    $story = $data["story"];
     
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>Hello world</h1>
        <a>profile</a>
    </header>

    <p style="white-space: pre;">
        <?php print_r($story['content']['body']);    ?>
    </p>
</body>
</html>