var pageLocators={
    postTitle : '#loop-container > div > article > div.post-header > h1',
    firstCourseLink : '#selenium-webdriver-with-java-for-beginners > a',
    secondCourseLink : '#advanced-selenium-webdriver-with-java-and-testng > a'
}

class CoursesPage{
    constructor(){
        this.url = "/courses/"
        this.title = "Courses"
    }

    postTitle(){return cy.get(pageLocators.postTitle)}
    firstCourseLink(){return cy.get(pageLocators.firstCourseLink)}
    secondCourseLink(){return cy.get(pageLocators.secondCourseLink)}
}
export default CoursesPage;