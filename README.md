# 93Gly

#### 93Gly is a social media application designed for astrophotographers to show off their images of the night sky and also view others' great work! Upload your photos, give them a title and description, and post them for the universe to see! [Visit us here!](https://ninetythree-gly.herokuapp.com/#/)

### Technologies

93Gly uses a Rails API backend to fetch post and user information from a Postgres database and photos hosted on AWS's S3.
The front end uses React and Redux to manage and display incoming data to the user.

### Challenges

#### The Home Page

One of the most difficult issues with this project was rendering the images on the home page in a fashion that was information dense while also visually satisfying. Images are uploaded at various resolutions and aspect ratios, so displaying all of these images on a single page without looking like a mess was challenging.

I tackled this problem by computing the aspect ratio of the uploaded image and solving for a width that would preserve the quality of the image, and used the flex property to dynamically resize each image dependent on the size of the window. Render logic was dependent on whether or not the image was fully loaded. If the image had not fully loaded, the computed width would result in NaN. So, I implemented a timer that checked if the image had finished loading, and upon completion, the component would rerender thus computing the width properly.
```javascript
  loadedTimer() {
    this.interval = setInterval( () => {
      if (this.img.complete) {
        this.setState({ loaded: true });
        clearInterval(this.interval);
        return; 
      }
    }, 1000);
  }

  render()  {
    const imgW = this.img.width;
    const imgH = this.img.height; 
    const calcW = 300 * imgW / imgH;
    const styles = {
      backgroundImage: `url(${this.props.post.photoUrl})`,
      flex: `1 0 ${calcW}px`
    };
...
```
However, this did lead to some issues regarding memory leaks. If the user navigated off of the page before all of the images had loaded, the state would not be set, and the load timer would run forever. This issue was remedied by clearing the interval upon the component unmounting.


#### The Manage Pane

The manage pane allows the logged in user to edit or delete posts they have uploaded, or create new posts. Bearing that in mind, this page is densely populated with components with various states that affect the UI. For example, a user can click on a post in the editor pane, which will highlight the selected post and update the state of the form (previously disabled due to no selection) to prefill inputs and reflect the editable information about said post.
```javascript
  ...

  const getTitleFromFile = fileName => {
    const noExt = fileName.slice(0, fileName.lastIndexOf("."));
    const validChars = /[a-z0-9]/;
    let titleGuess = "";
    noExt.split("").forEach( char => {
      if (validChars.test(char)) {
        titleGuess += char;
      } else {
        titleGuess += " ";
      }
    });
    return titleGuess;
  };
  
 ...
```
On the same pane, you can also click the upload button to render a modal with instructions on how to upload as many posts as the user would like. This form contains a "drag and drop" file upload feature, and takes a guess at what the post's title would be based on the file name. After file selection, the form displays a preview of the images the user has selected along with the predicted title. The user can edit the post details before submission, of course. This form also updates the UI to reflect which image is currently selected for editing by highlighting the photo and enabling the included input fields.

The reason why this manage pane was challenging portion was due to the immense functionality this single page can provide. Structuring the page and its components efficiently required planning and a lot of refactoring to improve existing features and to introduce new ones.

### Future Features

Features that have not been implemented yet include: liking and commenting on posts, following other users' accounts, a public profile page with all of your brilliant photography! 
