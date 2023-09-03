import time

def intro():
    print("Welcome to the Text Adventure Game!")
    time.sleep(2)
    print("You find yourself in a dark forest.")
    time.sleep(2)
    print("You can go left or right.")

def left_path():
    print("You chose to go left.")
    time.sleep(2)
    print("You encounter a friendly squirrel.")
    time.sleep(2)
    print("The squirrel leads you to a hidden treasure.")
    time.sleep(2)
    print("Congratulations! You win!")

def right_path():
    print("You chose to go right.")
    time.sleep(2)
    print("You stumble upon a bear's den.")
    time.sleep(2)
    print("The bear is sleeping, but you accidentally step on a twig and wake it up!")
    time.sleep(2)
    print("You have two options:")
    time.sleep(1)
    print("1. Try to run away.")
    time.sleep(1)
    print("2. Slowly back away.")
    
    choice = input("Enter your choice (1 or 2): ")
    
    if choice == "1":
        print("You attempt to run away, but the bear catches you.")
        time.sleep(2)
        print("Game over!")
    elif choice == "2":
        print("You slowly back away and manage to escape.")
        time.sleep(2)
        print("Congratulations! You survived!")

def text_adventure_game():
    intro()
    
    while True:
        choice = input("Enter your choice (left or right): ").lower()
        
        if choice == "left":
            left_path()
            break
        elif choice == "right":
            right_path()
            break
        else:
            print("Invalid choice. Please enter 'left' or 'right'.")

if __name__ == "__main__":
    text_adventure_game()
