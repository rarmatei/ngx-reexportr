# Ngx-ReExportr

Very simple utility directive that re-exports a given input as a new variable.

```html
<div *reExportr="(user$ | async) as user"> {{user.name}} </div>
```

## Example

The code below will result in 3 separate subscriptions to `user$`. It also adds some unnecessary bloat:

```html
User info:
<div> Name: {{(user$ | async)?.name}}</div>
<p> Intro: {{(user$ | async)?.description}}</p>
<span> E-mail: {{(user$ | async)?.email}}</span>
```

You can re-export your `| async` pipe result to a variable:

```html
<ng-container *reExportr="(user$ | async) as user">
    User info:
    <div> Name: {{user?.name}}</div>
    <p> Intro: {{user?.description}}</p>
    <span> E-mail: {{user?.email}}</span>
</ng-container>
```

This creates a **single subscription** to `$user` and it also looks a bit neater.

Another use-case would be when we need to target a sub-tree of an object multiple times:

```html
<!-- without re-exportr -->
First post preview:
<h1> {{state.posts[0].title}} </h1>
<p> {{state.posts[0].previewText}}

<!-- with re-exportr -->
First post preview:
<ng-container *reExportr="state.posts[0] as firstPost">
    <h1> {{firstPost.title}} </h1>
    <p> {{firstPost.previewText}}
</ng-container>
```

## What about \*ngIf?

All of the examples above can also be written with `*ngIf`:

```html
<ng-container *ngIf="(user$ | async) as user">
    User info:
    <div> Name: {{user?.name}}</div>
    <p> Intro: {{(user?.description}}</p>
    <span> E-mail: {{user?.email}}</span>
</ng-container>
```

However, if the observable takes a long time to emit, it throws an error, or it simply emits an `undefined` user, everything inside the `ng-container` element will be removed from the DOM.

Sometimes, that's desireable, as you might not want to display a template designed to display some data without the actual data. But it could also result in the UI jumping a lot, while it collapses or re-expands itself based on the availability of the data.

`ngx-reexportr` always displays your template, even when the data is not available, and leaves it to you to decide how to fill it.

## How to run

1.  `npm i ngx-reexportr --save`

2.  Import the module

```ts
import { ReExportrModule } from "ngx-reexportr";

@NgModule({
  imports: [ReExportrModule]
})
export class AppModule {}
```

3.  Add to your templates

```html
<ng-container *reExportr="(user$ | async) as user">
    <h2> Name: {{user.name}} </h2>
    <p> {{user.description}} </p>
</ng-container>
```
