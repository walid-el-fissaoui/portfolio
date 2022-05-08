<?php
    $response = [
        'top_error' => '',
        'top_success' => '',
        'email_error' => ''
    ];
    $contentType = isset($_SERVER['CONTENT_TYPE']) ? trim($_SERVER['CONTENT_TYPE']) : '';
    if($contentType == 'application/json') {
        $content = trim(file_get_contents(('php://input')));
        $decoded = json_decode($content,true);
        if(is_array($decoded)) {
            foreach ($decoded as $name => $value) {
                $decoded[$name] = trim(filter_var($value,FILTER_SANITIZE_STRING));
            }
            if(!filter_var($decoded["email"],FILTER_SANITIZE_EMAIL)) {
                $response["email_error"] = "Please enter a valid email address!";
                exit(json_encode($response));
            }
            else {
                $receiving_email_address = 'walid.elfissaoui@gmail.com';
                $mailHeaders = "From: " . $decoded["name"] . "<". $decoded["email"] .">\r\n";
                $mailHeaders .= "MIME-Version: 1.0\r\n";
                $mailHeaders .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
                $subject = "digitallabe contact form";
                $msg = "<html>
                        <body>
                            <p>name : {$decoded['name']}</p>
                            <p>email {$decoded['email']}</p>
                            <p>message : {$decoded['message']}</p>
                        </body>
                    </html>";
                if(mail($receiving_email_address,$subject ,$msg, $mailHeaders)) 
                {
                    $response["top_success"] = "Your message has been sent successfully :)";
                }
                else {
                    $response['top_error'] = "Sorry, an error occurred while sending your email, try again later :(";
                }
                exit(json_encode($response));
            } 
        }
    }
    $response['top_error'] = "Sorry, an error occurred while sending your email, try again later :(";
    exit(json_encode($response));
?>