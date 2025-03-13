{
    "users": [
      {
        "id": "1",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "role": "loan_officer",
        "status": "active"
      },
      {
        "id": "2",
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "role": "admin",
        "status": "active"
      }
    ],
    "borrowers": [
      {
        "id": "101",
        "name": "Michael Johnson",
        "email": "michael.j@example.com",
        "phone_number": "+1234567890",
        "address": "123 Main St, Cityville",
        "income_level": 75000,
        "credit_score": 720,
        "status": "active"
      }
    ],
    "loans": [
      {
        "id": "5001",
        "borrower_id": "101",
        "loan_type": "personal",
        "principal_amount": 10000,
        "interest_rate": 5.5,
        "loan_term": 12,
        "repayment_frequency": "monthly",
        "start_date": "2024-01-01",
        "end_date": "2025-01-01",
        "status": "active"
      }
    ],
    "repayments": [
      {
        "id": "9001",
        "loan_id": "5001",
        "borrower_id": "101",
        "amount_paid": 850,
        "payment_date": "2024-02-01",
        "payment_method": "bank_transfer",
        "status": "successful"
      }
    ],
    "loan_applications": [
      {
        "id": "3001",
        "borrower_id": "101",
        "loan_type": "business",
        "requested_amount": 25000,
        "status": "pending",
        "reason_for_loan": "Expand retail store",
        "approval_date": null
      }
    ]
  }
  