### OwnProps.Match

Live: [GitHub](https://aa-ownpropsdotmatch.herokuapp.com)

## Description

OwnProps.Match is a matching application to bring together people who are looking for pair programmers. We know how difficult it is to master a new language or framework on your own, so we want to bring together enthusiastic people together.

Users are able to create a profile and input information regarding themselves like language preferences, experience, goals, etc... and will be able to see other user profiles in the form of cards and be able to swipe if they would like to match with them. Mutual likes create notifications for the users.

## Technologies Used

The backend of this project was built using Mongoose models and Express routing actions to create/delete/modify Users, Likes and Notifications. User authentication functionality was built using the passport-jwt strategy.
The front-end was constructed using React-Redux to send axios requests to the MongoDB.
Photoshop was used to create custom card animations on the 'play' level.

## Technical Challenges

-Creating Notifications:

    -Within OwnProps.Match, users can like each other, and mutual likes will lead to matches, which in turn produce notifications for both parties. To do so, within the post action for a the 'Like' model, we query for an opposing like(where the liked is the current liker, and the user is the person being currently liked). If such a like is found, this implies a match between the users, and the post action for the like will create two new instances of 'Notifications' directed at the two users. There are no post actions specified for the 'Notifications' model, and notifications are craeted in this fashion instead.

    ```
     if (req.body.type==='like'){
        Like.find({ user: req.body.liked, liked: req.user.id, type: 'like' }).then((likes) => {
            if (likes.length!==0) {
                const newNotif = new Notification({ 
                    user: req.body.liked,
                    matched_with: req.user.id,
                    type: 'unseen'
                 });

                 newNotif.save().then(() => console.log('saved'));

                const newNotif2 = new Notification({
                    user: req.user.id,
                    matched_with: req.body.liked,
                    type: 'unseen'
                });

                newNotif2.save().then(() => console.log('saved'));

            }});
        }
    ```

    The above code snippet is the portion of the post action for likes that is responsible for querying for an opposing like and creating notifications if such a like is found.

-