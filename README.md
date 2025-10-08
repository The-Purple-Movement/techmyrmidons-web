![TPMLOGO](https://purple-movement.com/assets/logo_pm-Bx55hodj.png)
# Tech Myrmidons
![Repo Banner](public/helpers/myrmidons-banner.png)
## About Us
Too many technological developments and innovations occurring at rocket speed! Many of us do not even dare catch up with this, being already convinced that we cannot stay abreast of the current and latest buzz. If at all you do, you find yourself so lost in the sea of knowledge you just stepped in. Here is where Techmyrmidons come to help you get wet without drowning!

Techmyrmidon is a virtual technology icon who keeps itself updated with current technologies, changes its tools to match the trends, follows the right experts, and, the best blogs on a particular field of interest. To taste the latest tech trends and rightly pick your associates and mentors in technology, all you need to do is to follow the Techmyrmidon of your area of expertise. Here at Techmyrmidons, you will get to know where you stand and help you keep updated with relevant tools as well as collaborate with interesting and informed people in the domain.

At this open source platform, all of us are participants in a sort of giant, crowd-sourced focus group that helps filter and propagate useful technology in our day-to-day routines. Challenge yourself to meet the Techmyrmidons, face their tech weapons, follow their grooming methods and become a Techmyrmidon yourself. You'll be surprised to see what's waiting just around the corner!

## How to Contribute   

In case you are not familiar with JSON format, you can learn it real quick with these resources:
- [Video] [Learn JSON in 10 minutes](https://www.youtube.com/watch?v=iiADhChRriM&t=2s)
- [Article] [JSON Quick Guide](https://www.tutorialspoint.com/json/json_quick_guide.htm)


### Adding new Technologies
- Fork this repository to your own account.
- Inside `src/data` , there are folders which are named corresponding to the technology for which they contain the data.
- For Eg. the folder `/src/data/backend` has `{year}.json`, `years.json`, `blog.json` and `follow.json`.
- If in the year 2025 there is a new technology. First you will be creating `2025.json` following the format of the previous years.
- Then you will be updating `years.json` 
     ```
     {
      "year": "2025",
      "url": "/data/backend/2025.json"
    },
     ```
- To add the new technology, update the `{year}.json` with required data in the given format.
    ```
    {
   "2025": [
      {
        "title": "technology name",
        "description":"technology description",
        "url": "link to the website of that technology"
        "morelink": ""
      },
    ]
    }
    ```
    
### Adding new blogs
- Fork this repository to your own account.
- Inside `src/data` , there are folders which are named corresponding to the technology for which they contain the data.
- Inside each folder there are files named `blog.json`
- Update it with all the required informations.
    ```
     {
    "blog": "blog link",
    "author": "blog author"
  },
    ```
### Adding new people to follow
- Fork this repository to your own account.
- Inside `src/data` , there are folders which are named corresponding to the technology for which they contain the data.
- Inside each folder there are files named `follow.json`
- Update it with all the required informations.
    ```
     {
      "followLink":"https://twitter.com/brad_frost",
      "photo":"BradFrost.jpg",
      "name":"Brad Frost"
    },
    ```
- Do upload the photo of the person in the folder named Images in `/src/data/{technology_name}/images`

### Once Completed
- After you are done, raise a Pull Request to the repository.

## 👥 Contributors

Meet the amazing people who made this project possible!  
View the full contributor list in [CONTRIBUTORS.md](./CONTRIBUTORS.md).

<p align="left">
  <!-- Auto-generated contributor avatars -->
  <!-- Will be updated by GitHub Actions -->
</p>


## Guidelines
- Try to avoid duplicates.
- Please try to make sure that all the links and images are legit as well as working before raising the pull request.
- If you find any discrepancies in the data, feel free to open an issue, or raise an updation PR. It woudl be great if you have supporting docs, in case you are changing some core information.
