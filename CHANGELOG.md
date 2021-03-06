# Change Log

All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).
 
## [Unreleased]
 
### Added

- `SPA` env variable to have static page with loading spinner before redirect
- `de`, `fr`, `es`, `it`, `cn` base folders for translations
- finish translating `de` and `en`
- add `yarn translation:sort` to order translations (to ensure the same order 
  when we add / change translations)
- add `yarn translation:missing <lang>` to print a list of missing translations 
  for the given language (this takes `en` as a baseline)

### Changed

- `export` uses now spa mode for initial loading screen

### Fixed

- [OMF#93](https://github.com/ohmyform/ohmyform/issues/93) dropdown options are not saved
 
## [0.9.2] - 2020-06-04

### Fixed
 
- type error
 
## [0.9.1] - 2020-06-02
 
### Added
- radio fields
- dropdown fields
- min and max for date fields
- logout on home screen
- translation system

### Fixed

- initial Page is now correct also in SPA mode
- initial value for form adding
- anonymous submission of forms

