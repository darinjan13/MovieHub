<!-- resources/views/emails/subscription-success.blade.php -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subscription Success</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
            color: #333;
        }

        .container {
            background-color: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #4CAF50;
        }

        .footer {
            text-align: center;
            font-size: 12px;
            color: #aaa;
        }
    </style>
</head>

<body>

    <div class="container">
        <h1>Subscription Purchase Successful!</h1>
        <p>Hello, {{ $userName }}!</p>
        <p>Congratulations! You've successfully purchased the <strong>{{ $subscriptionPlan }}</strong> plan.</p>
        <p>Thank you for subscribing to our service. We hope you enjoy all the great features!</p>

        <div class="footer">
            <p>If you have any questions, feel free to contact us at support@example.com</p>
        </div>
    </div>

</body>

</html>
