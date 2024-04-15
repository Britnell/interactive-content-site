<?php

// Get the requested URI
$uri = $_SERVER['REQUEST_URI'];

// Define routes
$routes = [
    '/' => 'home.php',
    '/hello' => 'hello.php',
    '/json' => 'json.php',
];

// Check if the requested URI is in the routes
if (array_key_exists($uri, $routes)) {
    // Include the corresponding file
    include $routes[$uri];
} else {
    // Handle 404 Not Found
    http_response_code(404);
    echo '404 Not Found';
}
?>
