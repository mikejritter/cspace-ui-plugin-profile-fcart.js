# Change Log

## v7.0.0

v8.0.0 adds support for CollectionSpace 8.0, and requires cspace-ui version 9.

### Breaking Changes

- On the record editor form for Object records:
  - The number of objects field (`numberOfObjects`) has been replaced with the repeating object count group (`objectCountGroupList/objectCountGroup`). If this version of the anthropology profile is used with an older CollectionSpace server, values entered in the repeating group will not be saved.

## v6.0.0

v6.0.0 adds support for CollectionSpace 7.2.

### Breaking Changes

The record editor form for Object records now includes the following new fields, added in CollectionSpace 7.2. To use this version of the fine and contemporary art profile with an older CollectionSpace server, these fields should be hidden; otherwise, any values entered will not be saved.

- Description Level (`descriptionLevel`)
- Object Name Controlled (`objectNameList/objectNameGroup/objectNameControlled`)
- Material Controlled (`materialGroupList/materialGroup/materialControlled`)
- Production Era (`objectProductionEras/objectProductionEra`)
- Content controlled event or period/era (`contentEvents/contentEvent`)
- Associated controlled event or period/era (`assocEvents/assocEvent`)

## v5.0.2

- Adds `place/local` as an authority that can be used to populate the `currentLocation` and `normalLocation` fields in the Movement procedure.

## v5.0.0

### Breaking Changes

- v5.0.0 requires cspace-ui version 7.1. A new Time-Based Media template for object records has been added, which overrides the Time-Based Media template added in cspace-ui 7.0.0, and displays fields that exist in CollectionSpace 7.1, but not in prior versions of CollectionSpace.

## v4.0.0

### Breaking Changes

- v4.0.0 requires cspace-ui version 6. The record editor form for object records now uses the annotation fields that are defined in cspace-ui as of version 6, instead of using the (now deprecated) cspace-ui-plugin-ext-annotation plugin.

## v3.0.0

v3.0.0 Adds support for CollectionSpace 6.1.

### Breaking Changes

- A new field group, `annotationGroupList/annotationGroup`, has been added to the record editor form for object records. This field exists in the Fine and Contemporary Art profile in CollectionSpace 6.1, but not in prior versions of CollectionSpace. To use this version of cspace-ui-plugin-profile-fcart with an older version of the CollectionSpace server, this new field group should be hidden; otherwise, any values entered will not be saved.

## v2.1.0

- - Added the Named Collection field to the Object record editor form (only if using cspace-ui version 5).

## v2.0.0

v2.0.0 Adds support for CollectionSpace 6.0.

### Breaking Changes

- v2.0.0 requires cspace-ui version 4. If you've customized this profile, see the cspace-ui 4.0.0 change log for configuration changes that may be needed.
