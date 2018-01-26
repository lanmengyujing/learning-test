### Setup Flow

Flow works best when installed per-project with explicit versioning rather than globally.

    yarn run flow


### Dev setup

Bootstrap the packages in the current Lerna repo. Installs all of their dependencies and links any cross-dependencies.


     lerna bootstrap

add


    $ lerna add <package>[@version] [--dev]

Add local or remote package as dependency to packages in the current Lerna repo.

    lerna add module-1 --scope=module-2 --dev