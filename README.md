# Multiplayer Asteroids

## Introduction
A simple 3-player configuration Asteroids game written in C++ and rendered using OpenGL.

This game utilizes UDP and runs over LAN and localhost. It includes implementation of the dead-reckoning algorithm and basic lock-step protocol.

## How to Run
Navigate to the directory where the application has been downloaded and run the `cmd` on Windows.

Enter the player configurations as command-line parameters in the format of 

```Asteroids.exe host1:portnumber1 host2:portnumber2 host3:portnumber3```

The details of `host1:portnumber1` is assumed to belong to the currently started process, while the other 2 parameters represent the details of the other clients and may be specified in any order. The game will only begin when all 3 players have connected.

![Screenshot 2021-09-03 031549](https://user-images.githubusercontent.com/89937219/131904616-57972ee5-00d1-42bc-88a5-4a673b95aed6.png)

Once all 3 players have connected, the game will be started. The current state of each player is displayed on the console window throughout the game.

![Screenshot 2021-09-03 033218](https://user-images.githubusercontent.com/89937219/131905481-6b15bf96-7b2d-4ecd-9d2b-6a9fafd2b3d2.png)

## How to Play

The game does not have a win condition, with the goal of the game to survive as long as possible. Each player has **3 lives** and become immobile after losing all lives. 

The player is controlled using the **ASDW keys**:
- W to accelerate foward
- S to deccelerate backwards
- A to rotate anti-clockwise
- D to rotate clockwise
- SPACE to shoot

![gameplay](https://user-images.githubusercontent.com/89937219/131907690-604bb849-6500-4eec-ab5a-05ded2ddcdd3.gif)

## How to Terminate

The game can be terminated by pressing `ENTER` after all players have died.

![Screenshot 2021-09-03 035843](https://user-images.githubusercontent.com/89937219/131908377-6dec6264-d0d2-43dc-ab6e-5ec0eb3dba9c.png)

## Credits

This game was completed as a pair as part of a school networking assignment and hence its source code cannot be published. Roles and contributions of respective team members are listed in the `credits.txt` file.
