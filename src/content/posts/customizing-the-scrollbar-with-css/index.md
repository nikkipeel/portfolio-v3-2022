---
postSlug: "customizing-the-scrollbar-with-css"
date: "01.28.2021"
postTitle: "Customizing the Scrollbar with CSS"
postDescription: "Learn how to apply custom styling to the scrollbar on your project with pure CSS"
categories: ["CSS", "Styling"]
coverImage: ../images/scrollbar.png
---

Have you ever noticed the intricacies of the websites you visit? You can style just about every pixel of it, including the scrollbar. I was curious about how to go about this and found that it could be accomplished with just a few lines of CSS. 

Here's what we'll build in Codepen:
 
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/y3psdt0zzi0q6kjjdzcc.png)

Link to the final project: [CodePen](https://codepen.io/nikki-peel/pen/oNzmEMa)

Three boxes containing overflowing text content will all be scrollable but styled differently. The first `<section>` will have content be scrollable while the scrollbar itself is hidden. The second `<section>` will have a styled scrollbar that is always visible. The third `<section>` will have a styled scrollbar but only display it when the `<section>` is focused upon.

###**Create the three sections with text content**

First, create three `<section>` elements and within those sections create a paragraph containing a long string of text (I used 4 paragraphs of dummy text, enough to create overflow). I also chose to label each `<section>` with an `<h1>`:

```html
<section>
  <h1>Hidden</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quod fugiat natus exercitationem totam eveniet sint. Officiis itaque minima unde facilis at aut nostrum, veniam amet natus perspiciatis laboriosam exercitationem adipisci laudantium nihil voluptatem assumenda animi, fugit est harum officia! Quas quae expedita nemo, qui fuga unde error commodi harum deserunt aut incidunt esse sed laudantium veritatis earum nobis, quisquam at optio perferendis. Sed, consectetur. Enim deserunt tempore sunt? Laudantium rerum dignissimos sunt animi molestias maiores reprehenderit esse quas laboriosam?
      <br/>
    <br/>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt minima fugiat obcaecati et repudiandae dolore delectus, perspiciatis odio harum! Eaque iste numquam facere voluptas aspernatur molestiae hic vitae ducimus! Ducimus rem assumenda autem! Impedit molestiae quibusdam possimus libero quasi sunt eius rerum, omnis labore unde illo repellendus soluta eveniet vitae voluptatum. Quidem, sit adipisci ratione natus inventore voluptate saepe soluta in! Ea nemo voluptatem perferendis fuga eligendi quas, modi eos architecto, cupiditate minima vel adipisci obcaecati quia debitis! Debitis!
    <br/>
    <br/>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quod fugiat natus exercitationem totam eveniet sint. Officiis itaque minima unde facilis at aut nostrum, veniam amet natus perspiciatis laboriosam exercitationem adipisci laudantium nihil voluptatem assumenda animi, fugit est harum officia! Quas quae expedita nemo, qui fuga unde error commodi harum deserunt aut incidunt esse sed laudantium veritatis earum nobis, quisquam at optio perferendis. Sed, consectetur. Enim deserunt tempore sunt? Laudantium rerum dignissimos sunt animi molestias maiores reprehenderit esse quas laboriosam?
      <br/>
    <br/>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt minima fugiat obcaecati et repudiandae dolore delectus, perspiciatis odio harum! Eaque iste numquam facere voluptas aspernatur molestiae hic vitae ducimus! Ducimus rem assumenda autem! Impedit molestiae quibusdam possimus libero quasi sunt eius rerum, omnis labore unde illo repellendus soluta eveniet vitae voluptatum. Quidem, sit adipisci ratione natus inventore voluptate saepe soluta in! Ea nemo voluptatem perferendis fuga eligendi quas, modi eos architecto, cupiditate minima vel adipisci obcaecati quia debitis! Debitis!
  </p>
</section>

<section>
  <h1>Styled</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quod fugiat natus exercitationem totam eveniet sint. Officiis itaque minima unde facilis at aut nostrum, veniam amet natus perspiciatis laboriosam exercitationem adipisci laudantium nihil voluptatem assumenda animi, fugit est harum officia! Quas quae expedita nemo, qui fuga unde error commodi harum deserunt aut incidunt esse sed laudantium veritatis earum nobis, quisquam at optio perferendis. Sed, consectetur. Enim deserunt tempore sunt? Laudantium rerum dignissimos sunt animi molestias maiores reprehenderit esse quas laboriosam?
      <br/>
    <br/>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt minima fugiat obcaecati et repudiandae dolore delectus, perspiciatis odio harum! Eaque iste numquam facere voluptas aspernatur molestiae hic vitae ducimus! Ducimus rem assumenda autem! Impedit molestiae quibusdam possimus libero quasi sunt eius rerum, omnis labore unde illo repellendus soluta eveniet vitae voluptatum. Quidem, sit adipisci ratione natus inventore voluptate saepe soluta in! Ea nemo voluptatem perferendis fuga eligendi quas, modi eos architecto, cupiditate minima vel adipisci obcaecati quia debitis! Debitis!
    <br/>
    <br/>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quod fugiat natus exercitationem totam eveniet sint. Officiis itaque minima unde facilis at aut nostrum, veniam amet natus perspiciatis laboriosam exercitationem adipisci laudantium nihil voluptatem assumenda animi, fugit est harum officia! Quas quae expedita nemo, qui fuga unde error commodi harum deserunt aut incidunt esse sed laudantium veritatis earum nobis, quisquam at optio perferendis. Sed, consectetur. Enim deserunt tempore sunt? Laudantium rerum dignissimos sunt animi molestias maiores reprehenderit esse quas laboriosam?
      <br/>
    <br/>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt minima fugiat obcaecati et repudiandae dolore delectus, perspiciatis odio harum! Eaque iste numquam facere voluptas aspernatur molestiae hic vitae ducimus! Ducimus rem assumenda autem! Impedit molestiae quibusdam possimus libero quasi sunt eius rerum, omnis labore unde illo repellendus soluta eveniet vitae voluptatum. Quidem, sit adipisci ratione natus inventore voluptate saepe soluta in! Ea nemo voluptatem perferendis fuga eligendi quas, modi eos architecto, cupiditate minima vel adipisci obcaecati quia debitis! Debitis!
  </p>
</section>

<section>
  <h1>Hidden-until-focused</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quod fugiat natus exercitationem totam eveniet sint. Officiis itaque minima unde facilis at aut nostrum, veniam amet natus perspiciatis laboriosam exercitationem adipisci laudantium nihil voluptatem assumenda animi, fugit est harum officia! Quas quae expedita nemo, qui fuga unde error commodi harum deserunt aut incidunt esse sed laudantium veritatis earum nobis, quisquam at optio perferendis. Sed, consectetur. Enim deserunt tempore sunt? Laudantium rerum dignissimos sunt animi molestias maiores reprehenderit esse quas laboriosam?
    <br/>
    <br/>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt minima fugiat obcaecati et repudiandae dolore delectus, perspiciatis odio harum! Eaque iste numquam facere voluptas aspernatur molestiae hic vitae ducimus! Ducimus rem assumenda autem! Impedit molestiae quibusdam possimus libero quasi sunt eius rerum, omnis labore unde illo repellendus soluta eveniet vitae voluptatum. Quidem, sit adipisci ratione natus inventore voluptate saepe soluta in! Ea nemo voluptatem perferendis fuga eligendi quas, modi eos architecto, cupiditate minima vel adipisci obcaecati quia debitis! Debitis!
    <br/>
    <br/>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quod fugiat natus exercitationem totam eveniet sint. Officiis itaque minima unde facilis at aut nostrum, veniam amet natus perspiciatis laboriosam exercitationem adipisci laudantium nihil voluptatem assumenda animi, fugit est harum officia! Quas quae expedita nemo, qui fuga unde error commodi harum deserunt aut incidunt esse sed laudantium veritatis earum nobis, quisquam at optio perferendis. Sed, consectetur. Enim deserunt tempore sunt? Laudantium rerum dignissimos sunt animi molestias maiores reprehenderit esse quas laboriosam?
      <br/>
    <br/>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt minima fugiat obcaecati et repudiandae dolore delectus, perspiciatis odio harum! Eaque iste numquam facere voluptas aspernatur molestiae hic vitae ducimus! Ducimus rem assumenda autem! Impedit molestiae quibusdam possimus libero quasi sunt eius rerum, omnis labore unde illo repellendus soluta eveniet vitae voluptatum. Quidem, sit adipisci ratione natus inventore voluptate saepe soluta in! Ea nemo voluptatem perferendis fuga eligendi quas, modi eos architecto, cupiditate minima vel adipisci obcaecati quia debitis! Debitis!
  </p>
</section>
```

### **Create base styles with CSS**

Next, you'll want to create some basic styling:

```css
:root {
  --white: #f8f5f2;
  --teal: #00E8F0;
  --magenta: #CC0088;
  --purple: #54086B;
  --gradient: linear-gradient(to top left, var(--purple), var(--magenta));
}
body {
  display: flex;
  justify-content: space-evenly;
  background: var(--gradient);
  color: #121212;
  width: 90vw;
  height: 100vh;
  margin: 2rem auto;
}
section {
  display: block;
  background-color: var(--white);
  border-radius: 5px;
  height: 60vh;
  overflow-y: auto;
  margin: 0 1rem;
  padding: 2rem;
  border: 3px solid #121212;
}
p {
  line-height: 1.35;
  font-family: sans-serif;
} 
```

I decided to use custom properties for the colors in this project and declared them first at the top of the file (this is optional of course). Next, we'll use Flexbox to style the `<body>` using display: flex and space the sections evenly using `justify-content: space-evenly`. I also added margin to the `<body>` so that the sections would be centered horizontally with a bit of space on top and bottom as well: `margin: 2rem auto`

```css
body {
  display: flex;
  justify-content: space-evenly;
  background: var(--gradient);
  color: #121212;
  width: 90vw;
  height: 100vh;
  margin: 2rem auto;
}
```

The sections each have a `height` of 60vh with a `border-radius` of 5px for rounded corners. I added some padding to the `<section>` as well so that there is a nice amount of whitespace. You want to make sure you declare `overflow-y: auto` when styling your sections so that they are scrollable:

```css
section {
  display: block;
  background-color: var(--white);
  border: 3px solid #121212;
  height: 60vh;
  border-radius: 5px;
  overflow-y: auto;
  margin: 0 1rem;
  padding: 2rem;
}
```

The only styling I chose for the paragraph elements was a line-height of 1.35 and changing the font-family to sans-serif:

```css
p {
  line-height: 1.35;
  font-family: sans-serif;
} 
```

###**Styling the scrollbar component**

Now it's time for the fun part! In order to select the scrollbar, we'll use the pseudo-element `::webkit-scrollbar` on our `<section>` element to indicate that we want to use a custom scrollbar and assign it a `width` of 1.25em:

>*Note: if you plan to use a horizontal scroll bar instead (or in addition to) you'll need to declare a `height` for the scrollbar*
```css
section::-webkit-scrollbar {
width: 1.25em;
}
```

Next, we can style the 'track' of the scrollbar using `::-webkit-scrollbar-track`:

```css
section::-webkit-scrollbar-track {
  border-radius: 1.5px;
  background-color: var(--teal);
  -webkit-box-shadow: inset 0 0 8px rgba(0,0,0,0.3);
}
```

I added a small `border-radius` because the `<section>` container has rounded corners as well. You may also create an inner-shadow for the track using `box-shadow` and the keyword 'inset'.

Now that the `sidebar` and `sidebar-track` have been made we can add custom styling to the `sidebar-thumb` (this is the element that moves along the track):

```css
section::-webkit-scrollbar-thumb  {
  height: 50px;
  border-radius: 10px;
  background-color: var(--magenta);
  -webkit-box-shadow: inset 0 0 8px rgba(0,0,0,0.3);
}
```
Once again, we've added `border-radius` for rounded corners and an inner-shadow on the element. Adding an explicit height here was also necessary because the height of the `scrollbar-thumb` adapts to screen size and becomes too small of a target on mobile devices.

###**Hiding the scrollbar**

Remember, we want to hide the scrollbar on the first `<section>` while still maintaining scroll. To do this, simply target the element by its ID (`#hidden`) and write `display: none;`

```css
#hidden::-webkit-scrollbar {  
  display: none;
}
```

###**Hiding the scrollbar until focused**

Styling the third `<section>` was a bit trickier. We don't want the scrollbar to show unless the section has been focused upon. First, you must target the element by its ID (`#inactive`) and hide the overflowing content (this also hides the scrollbar!):

```css
#inactive {
  overflow: hidden;
}
```

Next, target the element's `:focus` state and change the overflow of the y axis to `auto`:

```css
#inactive:focus {
  overflow-y: auto;
}
```

If you click or tap on the third section, you should now see our custom scrollbar appear!

###**Making the sections tabbable and adding `:focus` styling**

These next few steps are implemented so that the sections can be focused upon by keyboard users as well. The `<section>` element is not tabbable by default as is the case with input elements, buttons, and anchor tags. In order to fix this, I added a `tabindex` to each of the sections within the HTML:

```css
<section id="hidden" tabindex="1"></section>
<section tabindex="2"></section>
<section id="inactive" tabindex="3"></section>
```
Next, custom styling can be used to indicate more clearly whether an element has been focused upon. For this project, I applied `transition` and `:focus` styles globally:
```css
* {
    transition: all .3s ease;
}
*:focus {
  outline: 4px dotted var(--teal);
}
```

###**Finishing touches**

You may also wish to add a short note as I have to the third `<section>` indicating that the user must tap to view the content:

```css
<em>* tap to focus on small screens</em>
```
In our CSS file, we can hide this element on large screens using a media query:
```css
em {
  display: block;
}
@media screen and (min-width: 769px) {
  em {
    display:none;
  }
}
```

Next, we should add another media query so that our content collapses when viewed on small screens:

```css
@media screen and (max-width: 768px) {
  body {
    display: flex;
    flex-direction: column;
  }
  
  section {
    margin: 1rem auto;
  }
}
```

First, we update our `<body>` element to use `flex-direction: column`. Next, adjust the margin on the `<section>` elements so that there is a vertical gap between them and they are centered horizontally: `margin: 1rem auto;`

###**Final HTML:**

```html
<section id="hidden" tabindex="1">
  <h1>Hidden</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quod fugiat natus exercitationem totam eveniet sint. Officiis itaque minima unde facilis at aut nostrum, veniam amet natus perspiciatis laboriosam exercitationem adipisci laudantium nihil voluptatem assumenda animi, fugit est harum officia! Quas quae expedita nemo, qui fuga unde error commodi harum deserunt aut incidunt esse sed laudantium veritatis earum nobis, quisquam at optio perferendis. Sed, consectetur. Enim deserunt tempore sunt? Laudantium rerum dignissimos sunt animi molestias maiores reprehenderit esse quas laboriosam?
      <br/>
    <br/>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt minima fugiat obcaecati et repudiandae dolore delectus, perspiciatis odio harum! Eaque iste numquam facere voluptas aspernatur molestiae hic vitae ducimus! Ducimus rem assumenda autem! Impedit molestiae quibusdam possimus libero quasi sunt eius rerum, omnis labore unde illo repellendus soluta eveniet vitae voluptatum. Quidem, sit adipisci ratione natus inventore voluptate saepe soluta in! Ea nemo voluptatem perferendis fuga eligendi quas, modi eos architecto, cupiditate minima vel adipisci obcaecati quia debitis! Debitis!
    <br/>
    <br/>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quod fugiat natus exercitationem totam eveniet sint. Officiis itaque minima unde facilis at aut nostrum, veniam amet natus perspiciatis laboriosam exercitationem adipisci laudantium nihil voluptatem assumenda animi, fugit est harum officia! Quas quae expedita nemo, qui fuga unde error commodi harum deserunt aut incidunt esse sed laudantium veritatis earum nobis, quisquam at optio perferendis. Sed, consectetur. Enim deserunt tempore sunt? Laudantium rerum dignissimos sunt animi molestias maiores reprehenderit esse quas laboriosam?
      <br/>
    <br/>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt minima fugiat obcaecati et repudiandae dolore delectus, perspiciatis odio harum! Eaque iste numquam facere voluptas aspernatur molestiae hic vitae ducimus! Ducimus rem assumenda autem! Impedit molestiae quibusdam possimus libero quasi sunt eius rerum, omnis labore unde illo repellendus soluta eveniet vitae voluptatum. Quidem, sit adipisci ratione natus inventore voluptate saepe soluta in! Ea nemo voluptatem perferendis fuga eligendi quas, modi eos architecto, cupiditate minima vel adipisci obcaecati quia debitis! Debitis!
  </p>
</section>

<section tabindex="2">
  <h1>Styled</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quod fugiat natus exercitationem totam eveniet sint. Officiis itaque minima unde facilis at aut nostrum, veniam amet natus perspiciatis laboriosam exercitationem adipisci laudantium nihil voluptatem assumenda animi, fugit est harum officia! Quas quae expedita nemo, qui fuga unde error commodi harum deserunt aut incidunt esse sed laudantium veritatis earum nobis, quisquam at optio perferendis. Sed, consectetur. Enim deserunt tempore sunt? Laudantium rerum dignissimos sunt animi molestias maiores reprehenderit esse quas laboriosam?
      <br/>
    <br/>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt minima fugiat obcaecati et repudiandae dolore delectus, perspiciatis odio harum! Eaque iste numquam facere voluptas aspernatur molestiae hic vitae ducimus! Ducimus rem assumenda autem! Impedit molestiae quibusdam possimus libero quasi sunt eius rerum, omnis labore unde illo repellendus soluta eveniet vitae voluptatum. Quidem, sit adipisci ratione natus inventore voluptate saepe soluta in! Ea nemo voluptatem perferendis fuga eligendi quas, modi eos architecto, cupiditate minima vel adipisci obcaecati quia debitis! Debitis!
    <br/>
    <br/>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quod fugiat natus exercitationem totam eveniet sint. Officiis itaque minima unde facilis at aut nostrum, veniam amet natus perspiciatis laboriosam exercitationem adipisci laudantium nihil voluptatem assumenda animi, fugit est harum officia! Quas quae expedita nemo, qui fuga unde error commodi harum deserunt aut incidunt esse sed laudantium veritatis earum nobis, quisquam at optio perferendis. Sed, consectetur. Enim deserunt tempore sunt? Laudantium rerum dignissimos sunt animi molestias maiores reprehenderit esse quas laboriosam?
      <br/>
    <br/>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt minima fugiat obcaecati et repudiandae dolore delectus, perspiciatis odio harum! Eaque iste numquam facere voluptas aspernatur molestiae hic vitae ducimus! Ducimus rem assumenda autem! Impedit molestiae quibusdam possimus libero quasi sunt eius rerum, omnis labore unde illo repellendus soluta eveniet vitae voluptatum. Quidem, sit adipisci ratione natus inventore voluptate saepe soluta in! Ea nemo voluptatem perferendis fuga eligendi quas, modi eos architecto, cupiditate minima vel adipisci obcaecati quia debitis! Debitis!
  </p>
</section>

<section id="inactive" tabindex="3">
  <em>* tap to focus on small screens</em>
  <h1>Hidden-until-focused</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quod fugiat natus exercitationem totam eveniet sint. Officiis itaque minima unde facilis at aut nostrum, veniam amet natus perspiciatis laboriosam exercitationem adipisci laudantium nihil voluptatem assumenda animi, fugit est harum officia! Quas quae expedita nemo, qui fuga unde error commodi harum deserunt aut incidunt esse sed laudantium veritatis earum nobis, quisquam at optio perferendis. Sed, consectetur. Enim deserunt tempore sunt? Laudantium rerum dignissimos sunt animi molestias maiores reprehenderit esse quas laboriosam?
    <br/>
    <br/>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt minima fugiat obcaecati et repudiandae dolore delectus, perspiciatis odio harum! Eaque iste numquam facere voluptas aspernatur molestiae hic vitae ducimus! Ducimus rem assumenda autem! Impedit molestiae quibusdam possimus libero quasi sunt eius rerum, omnis labore unde illo repellendus soluta eveniet vitae voluptatum. Quidem, sit adipisci ratione natus inventore voluptate saepe soluta in! Ea nemo voluptatem perferendis fuga eligendi quas, modi eos architecto, cupiditate minima vel adipisci obcaecati quia debitis! Debitis!
    <br/>
    <br/>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, quod fugiat natus exercitationem totam eveniet sint. Officiis itaque minima unde facilis at aut nostrum, veniam amet natus perspiciatis laboriosam exercitationem adipisci laudantium nihil voluptatem assumenda animi, fugit est harum officia! Quas quae expedita nemo, qui fuga unde error commodi harum deserunt aut incidunt esse sed laudantium veritatis earum nobis, quisquam at optio perferendis. Sed, consectetur. Enim deserunt tempore sunt? Laudantium rerum dignissimos sunt animi molestias maiores reprehenderit esse quas laboriosam?
      <br/>
    <br/>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt minima fugiat obcaecati et repudiandae dolore delectus, perspiciatis odio harum! Eaque iste numquam facere voluptas aspernatur molestiae hic vitae ducimus! Ducimus rem assumenda autem! Impedit molestiae quibusdam possimus libero quasi sunt eius rerum, omnis labore unde illo repellendus soluta eveniet vitae voluptatum. Quidem, sit adipisci ratione natus inventore voluptate saepe soluta in! Ea nemo voluptatem perferendis fuga eligendi quas, modi eos architecto, cupiditate minima vel adipisci obcaecati quia debitis! Debitis!
  </p>
</section>
```

###**Final CSS:**

```css
:root {
  --white: #f8f5f2;
  --teal: #00E8F0;
  --magenta: #CC0088;
  --purple: #54086B;
  --gradient: linear-gradient(to top left, var(--purple), var(--magenta));
}
* {
    transition: all .3s ease;
}
*:focus {
  outline: 4px dotted var(--teal);
}
body {
  display: flex;
  justify-content: space-evenly;
  background: var(--gradient);
  color: #121212;
  width: 90vw;
  height: 100vh;
  margin: 2rem auto;
}
section {
  display: block;
  background-color: var(--white);
  border-radius: 5px;
  height: 60vh;
  overflow-y: auto;
  margin: 0 1rem;
  padding: 2rem;
  border: 3px solid #121212;
}
p {
  line-height: 1.35;
  font-family: sans-serif;
} 
section::-webkit-scrollbar {
    width: 1.25em;
} 
 
section::-webkit-scrollbar-track {
  border-radius: 1.5px;
  background-color: var(--teal);
  -webkit-box-shadow: inset 0 0 8px rgba(0,0,0,0.3);
}
section::-webkit-scrollbar-thumb  {
  height: 50px;
  border-radius: 10px;
  background-color: var(--magenta);
  -webkit-box-shadow: inset 0 0 8px rgba(0,0,0,0.3);
}
/* hiding the scrollbar for the first <section> */
#hidden::-webkit-scrollbar {
  display: none;
}
#inactive {
  overflow: hidden;
}
#inactive:focus {
  overflow-y: auto;
}
/* use hidden-scrollbar type for 'body' */
body::-webkit-scrollbar {
  display: none;
}
@media screen and (max-width: 768px) {
  body {
    display: flex;
    flex-direction: column;
  }
  
  section {
    margin: 1rem auto;
  }
}
em {
  display: block;
}
@media screen and (min-width: 769px) {
  em {
    display:none;
  }
}
```

That's it! We now have three scrollable sections each with custom styling 🎉

###**Wrapping things up**

This is just the beginning of what you can do to style the scrollbars for your projects. There are a variety of pseudo-elements that can be used to customize each part of the scrollbar:

*`::-webkit-scrollbar` — the entire scrollbar.
*`::-webkit-scrollbar-button` — the buttons on the scrollbar (arrows pointing upwards and downwards).
*`::-webkit-scrollbar-thumb` — the draggable scrolling handle.
*`::-webkit-scrollbar-track` — the track (progress bar) of the scrollbar.
*`::-webkit-scrollbar-track-piece` — the part of the track (progress bar) not covered by the handle.
*`::-webkit-scrollbar-corner` — the bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet.
*`::-webkit-resizer` — the draggable resizing handle that appears at the bottom corner of some elements.

One important factor to keep in mind is accessibility. According to MDN, it is not suggested to be used in production due to its incompatibility with some browsers:

[MDN Docs - webkit-scrollbar](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/2w9nss0a05gt5xzdlo5x.png)


![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/arjlxuwklo40r9mi1dhv.png)

There is also another method being developed which I think is important to point out: [MDN Docs - CSS Scrollbars](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scrollbars)

Here is an example from MDN:

```
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
}
```

In this example, we're using green for the color of our thumb and purple for our scrollbar's track (both declared using `scrollbar-color`).

And the HTML:

```
<div class="scroller">
Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
Dandelion cucumber earthnut pea peanut soko zucchini.
</div>
```

Current browser compatibility for scrollbar-color and scrollbar-width:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/3gy0rnb7xy1er7f1392g.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/hktcfixvcpw7sifxc608.png)

---

If you know of any other methods that can be used for customizing the scrollbar, please share in the comments. Thank you for reading!


