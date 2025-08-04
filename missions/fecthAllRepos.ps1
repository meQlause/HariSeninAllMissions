# === CONFIG ===
$MonorepoDir = "monorepo"
$Repos = @(
    "Mission3",
    "Mission4",
    "Mission5",
    "Mission6",
    "Mission7",
    "Mission8",
    "Mission9",
    "Mission11"
)
$GithubUser = "meQlause"
$TargetSubdir = "missions"

# === INIT MONOREPO ===
if (!(Test-Path $MonorepoDir)) {
    mkdir $MonorepoDir | Out-Null
}
Set-Location $MonorepoDir
git init -b main

# === FUNCTION TO IMPORT ONE REPO ===
function Import-Repo($RepoName) {
    $RemoteName = "remote_" + $RepoName.ToLower()
    $RepoUrl = "https://github.com/$GithubUser/$RepoName.git"
    Write-Host "=== Importing $RepoName ==="

    git remote add $RemoteName $RepoUrl
    git fetch $RemoteName

    # Determine if the repo uses 'main' or 'master'
    $Branch = "main"
    $heads = git ls-remote --heads $RemoteName
    if ($heads -notmatch "refs/heads/main") {
        $Branch = "master"
    }

    git checkout -b "import/$RepoName" "$RemoteName/$Branch"

    # Move files into subdirectory
    New-Item -ItemType Directory -Force -Path "$TargetSubdir\$RepoName" | Out-Null
    Get-ChildItem -Force -Exclude ".git", ".", ".." | ForEach-Object {
        git mv $_.Name "$TargetSubdir\$RepoName" 2>$null
    }
    git commit -m "Move $RepoName into $TargetSubdir/$RepoName"

    git checkout main
    git merge "import/$RepoName" --allow-unrelated-histories -m "Merge $RepoName into monorepo"

    git remote remove $RemoteName
}

# === IMPORT ALL REPOS ===
foreach ($Repo in $Repos) {
    Import-Repo $Repo
}

Write-Host "✅ All repositories imported into $MonorepoDir\$TargetSubdir"
