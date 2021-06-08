# GIT BASICS

## Creating Repository
Go inside project folder and use git init which initializes empty Git repository or puts this project on git

 git init

## Creating Snapshot & other cool things
git add . : Puts all files on launchpad
git commit: Puts all these files on launchpad to git repo
git log: Gives log about commits
git status: If we change a file in this repo and run this command it tells which files are modified
git diff file1 file2: Shows difference between 2 files
git add . //Include current directory and all tree
git commit -m "First commit with all files"

## Time Travel in Git
We can roll to previous version of project by looking at logs and going to the state we want to go.
Suppose our project is facebook, when we do git log it gives a special commit sequence,Author name and Date wit mssg. Example
facebook> git log

commit c7ac56625aa724c0392934848d93fj40
Author: Arjit
Date: Thu Dec 5 13:54:38 2020 +0100
  FIXED BUG

commit e5d1a75569300fjfm23030kf3030
Author: Arjit
Date: Thu Dec 5 13:50:00 2020 +0100
  First commit with all files

 git checkout e5d1a755

## Branching and Merging
We can create seperate branch of our project at some point of time For eg: If after few commits we want Premium version of app ,so we create a branch.
If we merge 2 branches by moving to Premium branch and using git mrege master than history of premium branch contains commits of premium as well as master while history of master contains its history only.

git branch premium
git checkout premium//Switches to premium
git checkout master//Switches to master


//Merging
//Move to premium branch and type
git merge master

## Open Source Workflow
Fork Reop: We get a copy of repo on cloud i.e,it is ours
Clone Repo: We clone repo to local machine to work on it
Commit and Push Changes to Fork: We added changes to Fork repo
Send Pull Request: Ask maintainer of project to collect changes or new features and hopefully they Pull Changes to orginal repo
