
```python
def show_settings():
    print("\n--- Settings ---")
    print("1. Change password")
    print("2. Notification preferences")
    print("3. Privacy settings\n")

def logout():
    print("\nLogging out...")
    exit()

def main_menu():
    while True:
        print("\n--- Toolkit Menu ---")
        print("1. Settings")
        print("2. Logout")
        choice = input("Enter your choice (1 or 2): ")

        if choice == '1':
            show_settings()
        elif choice == '2':
            logout()
        else:
            print("Invalid option. Please choose 1 or 2.")

if _name_ == "_main_":
    main_menu()
```
