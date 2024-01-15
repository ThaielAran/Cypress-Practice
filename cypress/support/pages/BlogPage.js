var pageLocators={
    firstBlogLink : '#loop-container > div.post-638.post.type-post.status-publish.format-standard.hentry.category-blog.tag-api.tag-restassured.tag-selenium.tag-unit.entry > article > div.post-header > h2 > a',
    secondBlogLink : '#loop-container > div.post-628.post.type-post.status-publish.format-standard.hentry.category-blog.tag-selenium.entry > article > div.post-header > h2 > a',
    pageTwo : '#main-container > nav > div > a:nth-child(2)'
}

class BlogPage{
    constructor() {
        this.url = "/blog/"
        this.title = "Home"
      }

    firstBlogLink(){return cy.get(pageLocators.firstBlogLink)}
    secondBlogLink(){return cy.get(pageLocators.secondBlogLink)}
    pageTwo(){return cy.get(pageLocators.pageTwo)}
}
export default BlogPage;