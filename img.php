<!DOCTYPE html>
<html>
<body>

<?php 
$myLinks = array("https://liucn.cc/img/01.png", 
    "https://liucn.cc/img/02.png",
    "https://liucn.cc/img/03.jpg",
    "https://liucn.cc/img/04.jpg",
    "https://liucn.cc/img/05.jpg",
    "https://liucn.cc/img/06.jpg",
    "https://liucn.cc/img/07.png",
    "https://liucn.cc/img/08.png",
    "https://liucn.cc/img/09.png",
    "https://liucn.cc/img/10.png",
    "https://liucn.cc/img/11.jpg",
    "https://liucn.cc/img/12.png",
    "https://liucn.cc/img/13.jpg",
    "https://liucn.cc/img/14.jpg",
    "https://liucn.cc/img/15.jpg",
    "https://liucn.cc/img/16.jpg",
    "https://liucn.cc/img/17.jpg");

$randomRedirection = $myLinks[array_rand($myLinks)];
header("Location: $randomRedirection");
?>

</body>
</html>