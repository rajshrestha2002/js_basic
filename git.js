//git; github
//*distrubuted VCS
//github; gitlab; bitbucket
//*repository
//local
//remote
//branching
//login //register //dashboard
//*bug fix
//*version
//terminal commands
//*git commands
//*git config --global --list
//*git config --global user.name "<user_name>"
//*git config --global user.email "<user_email>"
//*git config --global init.defaultbranch "main"
//ls -a
//git init // initialized empty git repository 
// run in root folder of project for the first time

//?git working flow
//*working directory -> staging area -> local repo -> remote repo
//changes -> ready state -> new version
//?
//*git status -> run in terminal
//*git add <file_path>
//*git add 1.variables.js //example
//*git status
//*git commit -m "<commit_message>"
//*git commit -m "<add:variables>" //example
// git add . //add current folder
//?github
//*git remote -v //lists repo
//*git remote add origin <remote_repo_rul>
//*git remote remove origin
//*git push origin <branch_name> //from local git->github
//*git push origin main //example
//*git pull origin <branch_name> //from github->local git
//? 
//.gitignore //file //#//ignore.js
// repeat the following process for every changes you made.
//*git add .
//*git commit -m "add:git remote comments"
//*git push origin main
//?branching
//*git branch ->list all local branch
//*git branch <branch_name> -> create new branch
//*git branch -d <branch_name> -> delete branch/soft
//*git branch -D <branch_name> -> delete branch/hard
//*git switch <branch_name> -> switch between branches
//*git checkout <branch_name> -> switch between branches
//*git checkout -b <branch_name> -> create & switch to new branche
//?merge
//*git merge <branch_name>
//*git switch -c <branch_name> -> create & switch to new branch

//? merge
//*git merge <branch_name>

//*git log
//*git log --oneling

//?rebase
//main: A->B->C->F->G
//test:       C->D->E
//test:       C->F->G->D'->E'
//*git rebase <branch_name>//

//*cherry-pick <commit-id>
//*git cherry-pick <commit-id>
//main: A->B->C->F->G->D'
//fix:       C->D->E

// reset -> HEAD~n-> HEAD~1
//*git reset <commit-id>
//*git reset --soft <commit-id>
//*git reset --mixed <commit-id>
//*git reset --hard <commit-id>
//fix C->D->E

//revert
//*git revert <commit-id>
//fix C->D->E->D'

//?restore <file-name>
//*git status
//*git restore --staged <file-name>

