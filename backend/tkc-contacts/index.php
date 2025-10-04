<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    
</body><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Management Dashboard</title>
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
            --success-color: #28a745;
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
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
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

        .add-contact-btn {
            background-color: var(--primary-gold);
            color: var(--bg-color);
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .add-contact-btn:hover {
            opacity: 0.9;
            box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
        }

        /* Dashboard Cards */
        .dashboard-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2.5rem;
        }

        .card {
            background-color: var(--surface-color);
            padding: 1.5rem;
            border-radius: 12px;
            border-left: 4px solid var(--primary-gold);
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .card-title {
            color: var(--text-muted);
            font-size: 0.9rem;
            font-weight: 500;
        }

        .card-value {
            font-size: 2.25rem;
            font-weight: 600;
            color: var(--text-color);
        }

        .card-icon {
            align-self: flex-end;
            color: var(--primary-gold);
            opacity: 0.3;
        }
        
        /* Contacts Table */
        .contacts-table-wrapper {
            background-color: var(--surface-color);
            border-radius: 12px;
            padding: 2rem;
            overflow-x: auto;
        }

        .contacts-table {
            width: 100%;
            border-collapse: collapse;
        }

        .contacts-table th, .contacts-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid var(--border-color);
        }

        .contacts-table th {
            color: var(--primary-gold);
            text-transform: uppercase;
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 0.5px;
        }

        .contacts-table tbody tr {
            transition: background-color 0.3s ease;
        }

        .contacts-table tbody tr:hover {
            background-color: #2a2a2a;
        }
        
        .contacts-table tbody tr:last-child td {
            border-bottom: none;
        }

        .action-buttons {
            display: flex;
            gap: 1rem;
        }

        .action-buttons a {
            color: var(--text-muted);
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .action-buttons .edit-btn:hover {
            color: var(--primary-gold);
        }
        
        .action-buttons .delete-btn:hover {
            color: var(--danger-color);
        }

        @media (max-width: 768px) {
            body {
                padding: 1rem;
            }
            .header {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
            }
        }
    </style>
</head>
<body>

    <div class="container">
        <!-- Header -->
        <header class="header">
            <h1>Contact Dashboard</h1>
            <a href="create.php" class="add-contact-btn" style="text-decoration: none;">
                <i data-lucide="plus-circle"></i>
                Add New Contact
    </a>
        </header>

        <!-- Dashboard Stats Cards -->
        <section class="dashboard-cards">
            <div class="card">
                <div class="card-icon"><i data-lucide="users" size="48"></i></div>
                <div class="card-title">Total Contacts</div>
                <div class="card-value">5</div>
            </div>
            <div class="card">
                 <div class="card-icon"><i data-lucide="user-plus" size="48"></i></div>
                <div class="card-title">New This Week</div>
                <div class="card-value">2</div>
            </div>
            <div class="card">
                 <div class="card-icon"><i data-lucide="mail-warning" size="48"></i></div>
                <div class="card-title">Contacts without Email</div>
                <div class="card-value">0</div>
            </div>
        </section>

        <!-- Contacts Table -->
        <main class="contacts-table-wrapper">
            <table class="contacts-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Johnathan Doe</td>
                        <td>john.doe@example.com</td>
                        <td>555-1234</td>
                        <td>123 Innovation Drive, Tech City</td>
                        <td class="action-buttons">
                             <a href="show.php" class="show-btn" title="Edit"><i data-lucide="eye"></i></a>
                            <a href="#" class="edit-btn" title="Edit"><i data-lucide="edit"></i></a>
                            <a href="#" class="delete-btn" title="Delete"><i data-lucide="trash-2"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>Eleanor Vance</td>
                        <td>eleanor.v@example.com</td>
                        <td>555-5678</td>
                        <td>456 creative Ave, Design District</td>
                        <td class="action-buttons">
                             <a href="show.php" class="show-btn" title="Edit"><i data-lucide="eye"></i></a>
                            <a href="#" class="edit-btn" title="Edit"><i data-lucide="edit"></i></a>
                            <a href="#" class="delete-btn" title="Delete"><i data-lucide="trash-2"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>Marcus Holloway</td>
                        <td>marcus.h@example.com</td>
                        <td>555-9012</td>
                        <td>789 Logic Lane, Silicon Valley</td>
                        <td class="action-buttons">
                             <a href="show.php" class="show-btn" title="Edit"><i data-lucide="eye"></i></a>
                            <a href="#" class="edit-btn" title="Edit"><i data-lucide="edit"></i></a>
                            <a href="#" class="delete-btn" title="Delete"><i data-lucide="trash-2"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>Isabella Rossi</td>
                        <td>isabella.r@example.com</td>
                        <td>555-3456</td>
                        <td>101 Art Street, Metro City</td>
                        <td class="action-buttons">
                             <a href="show.php" class="show-btn" title="Edit"><i data-lucide="eye"></i></a>
                            <a href="#" class="edit-btn" title="Edit"><i data-lucide="edit"></i></a>
                            <a href="#" class="delete-btn" title="Delete"><i data-lucide="trash-2"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>Samuel Chen</td>
                        <td>sam.chen@example.com</td>
                        <td>555-7890</td>
                        <td>212 Data Court, Info Town</td>
                        <td class="action-buttons">
                            <a href="show.php" class="show-btn" title="Edit"><i data-lucide="eye"></i></a>
                           <a href="#" class="edit-btn" title="Edit"><i data-lucide="edit"></i></a>
                           <a href="#" class="delete-btn" title="Delete"><i data-lucide="trash-2"></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    </div>

    <script>
        lucide.createIcons();
    </script>
</body>
</html>

</html>