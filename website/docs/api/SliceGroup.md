---
id: SliceGroup
title: SliceGroup
sidebar_label: SliceGroup
hide_title: true
---

# `SliceGroup`

A `SliceGroup` allows grouping several Slices under a given name.
A `SliceGroup` is similar in concept to a Folder, where the Slices are the files.
Instead of having all the Slices created directly under the root, one can groups
Slices by some arbitrary chosen group names.

This can make it easier to navigate in the Redux Dev Tools, a large redux state object with 30+ Slices.
SliceGroups like folders can be nested.
Avoid deep nesting, it may have the opposite effect, making it difficult to find the slices in the store state object.

A `SliceGroup` is an object that looks like:

```ts
{
    addReducers: AddReducers,
    path: string,
    reducer: Reducer,
}
```

## Properties

### `addReducers`

A function that children Slices or SliceGroups use to add their reducer to
this SliceGroup's `reducer`.

### `path`

A string expressing the location of this `SliceGroup`.

### `reducer`

The `SliceGroup`'s reducer.  
It is a "mutable combine reducer".  
Use the `SliceGroup`'s `addReducers` function to add reducers to it.

## Note

A `SliceGroup` is a [`SliceParent`](/slices-for-redux/docs/api/SliceParentInterface) that exposes its reducer.
