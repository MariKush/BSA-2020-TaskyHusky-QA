import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Random;

public class Project {
    WebDriver driver = new FirefoxDriver();
    Random rand = new Random();
    String email = "test1@test.com";
    String password = "123456";

    public String randomNameProject() {
        String namePr = "Project";
        String randStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder newStr = new StringBuilder();
        for (int i =0; i<3; i++) {
            int index = (int) (rand.nextFloat()*randStr.length());
            newStr.append(randStr.charAt(index));
        }
        String gotRandStr = newStr.toString();
        return namePr+gotRandStr;

    }
    String nameProject = randomNameProject();
    public String randomKeyProject() {
        String namePr = "Proj";
        String randStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder newStr = new StringBuilder();
        for (int i =0; i<2; i++) {
            int index = (int) (rand.nextFloat()*randStr.length());
            newStr.append(randStr.charAt(index));
        }
        String gotRandStr = newStr.toString();
        return namePr+gotRandStr;

    }
    String keyProject = randomKeyProject();


    @BeforeClass
    public static void setUp() {
        System.setProperty("webdriver.gecko.driver", "D:\\Binary studio academy\\Automation\\src\\main\\resources\\geckodriver-v0.27.0-win64\\geckodriver.exe");
    }

    @Before
    public void precondition() {
        driver.get("https://stage.taskyhusky.xyz/login");
    }

    @Test
    public void signUp() {

        WebDriverWait waitEmail = new WebDriverWait(driver, 10);
        waitEmail.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("input[type='text']"))).sendKeys(email);

        WebElement continueSignUp = driver.findElement(By.cssSelector(".styles_continueButton__24IY9"));
        continueSignUp.click();

        WebDriverWait waitPassword = new WebDriverWait(driver, 10);
        waitPassword.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("input[type='password']"))).sendKeys(password);

        WebElement logIn = driver.findElement(By.cssSelector(".styles_continueButton__24IY9"));
        logIn.click();
        WebDriverWait waitProject = new WebDriverWait(driver, 10);
        waitProject.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".styles_create__button__2tWE3"))).click();
        WebDriverWait waitNameProject = new WebDriverWait(driver, 10);
        waitNameProject.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("input[placeholder='Напишите название проекта']"))).sendKeys(nameProject);
        WebDriverWait waitKeyProject = new WebDriverWait(driver, 10);
        waitKeyProject.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("input[placeholder='Напишите собственный ключ проекта']"))).sendKeys(keyProject);
        WebDriverWait waitBtnCreateProject = new WebDriverWait(driver, 10);
        waitBtnCreateProject.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[contains(@class, 'primaryBtn')]"))).click();


    }

}
