<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Details</title>
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
            --danger-color: #dc3545;
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
            max-width: 500px;
            width: 100%;
        }

        .header {
            display: flex;
            justify-content: flex-end; /* Pushed back link to the right */
            align-items: center;
            margin-bottom: 1rem;
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
        
        /* Detail Card Styling */
        .contact-card {
            background-color: var(--surface-color);
            border-radius: 16px;
            padding: 2.5rem;
            text-align: center;
        }
        
        .avatar {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: linear-gradient(145deg, #2a2a2a, var(--primary-gold));
            color: var(--bg-color);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            font-weight: 600;
            margin: 0 auto 1rem auto;
            border: 4px solid var(--surface-color);
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
        
        .contact-name {
            font-size: 2rem;
            font-weight: 600;
            color: var(--text-color);
            margin-bottom: 1.5rem;
        }

        .contact-details {
            list-style: none;
            text-align: left;
            margin-bottom: 2.5rem;
        }

        .detail-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 0;
            border-bottom: 1px solid var(--border-color);
        }
        
        .detail-item:last-child {
            border-bottom: none;
        }
        
        .detail-item .icon {
            color: var(--primary-gold);
        }
        
        .detail-info {
            display: flex;
            flex-direction: column;
        }
        
        .detail-label {
            font-size: 0.8rem;
            color: var(--text-muted);
            text-transform: uppercase;
        }
        
        .detail-value {
            font-size: 1rem;
            color: var(--text-color);
        }

        .action-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
        }

        .action-btn {
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
            font-size: 0.9rem;
        }
        
        .edit-btn {
            background-color: var(--primary-gold);
            color: var(--bg-color);
        }
        
        .edit-btn:hover {
            opacity: 0.9;
            box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
        }
        
        .delete-btn {
            background-color: transparent;
            color: var(--danger-color);
            border: 1px solid var(--danger-color);
        }
        
        .delete-btn:hover {
            background-color: var(--danger-color);
            color: var(--text-color);
        }

        @media (max-width: 768px) {
            body {
                padding: 1rem;
                align-items: flex-start;
            }
             .contact-card {
                padding: 1.5rem;
            }
            .avatar {
                width: 100px;
                height: 100px;
                font-size: 2.5rem;
            }
        }
    </style>
</head>
<body>

    <div class="container">
        <!-- Header -->
        <header class="header">
            <!-- This link should point to your dashboard page -->
            <a href="index.html" class="back-link">
                <i data-lucide="arrow-left"></i>
                Back to Dashboard
            </a>
        </header>

        <!-- Contact Detail Card -->
        <main class="contact-card">
            <div class="avatar">JD</div>
            <h1 class="contact-name">Johnathan Doe</h1>

            <ul class="contact-details">
                <li class="detail-item">
                    <i class="icon" data-lucide="mail"></i>
                    <div class="detail-info">
                        <span class="detail-label">Email</span>
                        <span class="detail-value">john.doe@example.com</span>
                    </div>
                </li>
                <li class="detail-item">
                    <i class="icon" data-lucide="phone"></i>
                    <div class="detail-info">
                        <span class="detail-label">Phone</span>
                        <span class="detail-value">555-1234</span>
                    </div>
                </li>
                <li class="detail-item">
                    <i class="icon" data-lucide="map-pin"></i>
                    <div class="detail-info">
                        <span class="detail-label">Address</span>
                        <span class="detail-value">123 Innovation Drive, Tech City</span>
                    </div>
                </li>
            </ul>

            <div class="action-buttons">
                <a href="#" class="action-btn edit-btn">
                    <i data-lucide="edit"></i>
                    Edit Contact
                </a>
                <a href="#" class="action-btn delete-btn">
                    <i data-lucide="trash-2"></i>
                    Delete
                </a>
            </div>
        </main>
    </div>

    <script>
        lucide.createIcons();
    </script>
</body>
</html>
