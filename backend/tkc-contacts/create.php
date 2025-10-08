
<?php
$success = false;
if(isset($_GET['message']) && $_GET['message'] == "success"){
  $success = "done";
}

if(isset($_GET['message']) && $_GET['message'] == "failed"){
  $success = "failed";
}




?>





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add New Contact</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        :root {
            --bg-color: #121212;
            --surface-color: #1E1E1E;
            --primary-gold: #D4AF37;
            --text-color: #E0E0E0;
            --text-muted: #888888;
            --border-color: #333333;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            padding: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }

        .container {
            max-width: 600px;
            width: 100%;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
        }

        .header h1 {
            color: var(--primary-gold);
            font-weight: 600;
        }
        
        .back-link {
            color: var(--text-muted);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: color 0.3s ease;
        }
        
        .back-link:hover {
            color: var(--primary-gold);
        }
        
        /* Form Styling */
        .form-wrapper {
            background-color: var(--surface-color);
            border-radius: 12px;
            padding: 2.5rem;
        }
        
        .contact-form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .form-group {
            display: flex;
            flex-direction: column;
        }
        
        .form-group label {
            font-weight: 500;
            margin-bottom: 0.5rem;
            color: var(--text-muted);
        }
        
        .input-wrapper {
            position: relative;
        }
        
        .input-wrapper .icon {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-muted);
        }
        
        .form-group input {
            background-color: var(--bg-color);
            color: var(--text-color);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 0.8rem 1rem 0.8rem 3rem; /* Padding for icon */
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        
        .form-group input:focus {
            outline: none;
            border-color: var(--primary-gold);
            box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
        }

        .form-group input::placeholder {
            color: #555;
        }

        .form-actions {
            margin-top: 1rem;
        }

        .save-btn {
            background-color: var(--primary-gold);
            color: var(--bg-color);
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 8px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            width: 100%;
        }

        .save-btn:hover {
            opacity: 0.9;
            box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
        }
        .alert-container{
        /* background-color: green; */
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .alert{
        width: 50%;
        padding: 1rem;
        border-radius: .5rem;
        box-shadow: 5px 5px 15px #333333 ;
        margin-bottom: 1rem;
      }
      .alert-success{
        background-color: lightgreen;
        border: 2px solid green;
      }
      .alert-error {
        background-color: red;
         border: 2px solid maroon;

      }

        @media (max-width: 768px) {
            body {
                padding: 1rem;
                align-items: flex-start;
            }
             .form-wrapper {
                padding: 1.5rem;
            }
        }

    </style>
</head>
<body>

    <div class="container">
        <!-- Header -->
        <header class="header">
            <h1>Add New Contact</h1>
            <!-- This link should point to your dashboard page -->
            <a href="index.html" class="back-link">
                <i data-lucide="arrow-left"></i>
                Back
            </a>
        </header>
<?php
      $successAlert = '<div class="alert-container">
        
        <!-- alert -->
        <div class="alert alert-success">
          Success , your contact is added
        </div>
      </div>';

      $failedAlert = '<div class="alert-container">
        
        <!-- alert -->
        <div class="alert alert-error">
          Sorry , your contact was not added
        </div>
      </div>';

      if($success == "done"){
        echo $successAlert;
      }else if($success == "failed"){
        echo $failedAlert;
      }


      ?>
        <!-- Add Contact Form -->
        <main class="form-wrapper">
            <form action="backend/controllers/form_controller.php" method="POST" class="contact-form">
                
                <!-- Full Name -->
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <div class="input-wrapper">
                        <i class="icon" data-lucide="user"></i>
                        <input type="text" id="name" name="name" placeholder="e.g., Johnathan Doe" required>
                    </div>
                </div>

                <!-- Email Address -->
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <div class="input-wrapper">
                         <i class="icon" data-lucide="mail"></i>
                        <input type="email" id="email" name="email" placeholder="e.g., john.doe@example.com" required>
                    </div>
                </div>

                <!-- Phone Number -->
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <div class="input-wrapper">
                        <i class="icon" data-lucide="phone"></i>
                        <input type="tel" id="phone" name="phone" placeholder="e.g., 555-1234">
                    </div>
                </div>

                <!-- Address -->
                <div class="form-group">
                    <label for="address">Address</label>
                    <div class="input-wrapper">
                        <i class="icon" data-lucide="map-pin"></i>
                        <input type="text" id="address" name="address" placeholder="e.g., 123 Innovation Drive, Tech City">
                    </div>
                </div>
                
                <!-- Action Button -->
                <div class="form-actions">
                    <button type="submit" class="save-btn">
                        <i data-lucide="save"></i>
                        Save Contact
                    </button>
                </div>
            </form>
        </main>
    </div>

    <script>
        lucide.createIcons();
    </script>
</body>
</html>
