# ArkScript website ![Latest version](https://img.shields.io/github/v/release/arkscript-lang/ark?include_prereleases&style=for-the-badge)

This repository is hosting the presentation and documentation of the language.

## A brief tour

Every path listed in this section are relative to `docs/`.

### Language presentation

This is located in `index.html` + every root HTML files.

The tutorials (understanding the language, embedding it in C++, the specification of the bytecode, how to build the language...) are under the folder `tutorials/`.

### ArkScript source code documentation

This one is automatically generated through Doxygen by our development team, under `impl/`. Do not modify this folder as every changes will get erased by Doxygen each time we regenerate the documentation.

The Doxyfile for this is in the [core repository](https://github.com/ArkScript-lang/Ark).

### ArkScript std lib documentation

This is automatically regenerated every day at 00:00 by a GitHub action on this repository, using our [documentation generator (ArkDoc)](https://github.com/ArkScript-lang/ArkDoc), and the latest version of the [standard library](https://github.com/ArkScript-lang/std) (master branch only).

## Contributing

* First, [fork](https://github.com/ArkScript-lang/arkscript-lang.github.io/fork) the repository
* Then, clone your fork: `git clone git@github.com:username/arkscript-lang.github.io.git`
* Create a branch for your feature: `git checkout -b feat-my-awesome-idea`
* When you're done, push it to your fork and submit a pull request!