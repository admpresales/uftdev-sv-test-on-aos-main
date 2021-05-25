// To use this project you will need to work on NimbusServer
// Start the intellij 2.2.0 and AOS 2.2 containers
// To enable the Service Virtualization you
// AOS local username for this test is DemoUser, and password is DemoUser123
// To enable SV to intervene when you open an application in your browser, you must configure the browser to use the SV proxy address localhost:9000

package com.company;

import com.hp.lft.sdk.web.Browser;
import com.hp.lft.sdk.web.BrowserDescription;
import com.hp.lft.sdk.web.BrowserFactory;
import com.hp.lft.sdk.web.BrowserType;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import com.hp.lft.sdk.*;
import com.hp.lft.verifications.*;
import com.hp.lft.sdk.web.*;
import unittesting.*;
import org.microfocus.sv.api.SvClient;
import org.microfocus.sv.model.project.Module;
import java.text.BreakIterator;


public class UFTDeveloperTest extends UnitTestClassBase {

    static SvClient client;
    static  Browser browser;

    public UFTDeveloperTest() {
        //Change this constructor to private if you supply your own public constructor

    }

    @BeforeClass
    public static void setUpBeforeClass() throws Exception {
        instance = new UFTDeveloperTest();
        globalSetup(UFTDeveloperTest.class);


       SvInfo inf = Desktop.getSvInfo();
       System.out.println(inf.getEndpoint());
       //client = SvClient.newInstance(inf.getEndpoint());
        client = SvClient.newInstance(inf.getEndpoint().replace("/api",""));
       client.loadActiveVirtualLab("classpath:/VirtualServices/sv-lab.json", client.compileModuleFromSources("classpath:/VirtualServices/*"), true);

       client.startActiveVirtualLab();
       client.runSimulation("AOS_AccountService");
       browser = BrowserFactory.launch(new BrowserDescription.Builder().type(BrowserType.CHROME).set("profile_proxy", "http://localhost:9000").build());

        //Add your functional test steps here


    }

    @AfterClass
    public static void tearDownAfterClass() throws Exception {
        globalTearDown();
        //client.stopSimulation();
        //client.stopActiveVirtualLab();
        client.close();
    }

    @Before
    public void setUp() throws Exception {
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void test() throws GeneralLeanFtException {

        browser = BrowserFactory.launch(BrowserType.CHROME);
        browser.navigate("http://nimbusserver.aos.com:8000/#/");


        Link userMenuLink = browser.describe(Link.class, new LinkDescription.Builder()
                .innerText("My account My orders Sign out ")
                .tagName("A").build());
        userMenuLink.click();

        EditField usernameEditField = browser.describe(EditField.class, new EditFieldDescription.Builder()
                .name("username")
                .tagName("INPUT")
                .type("text").build());
        usernameEditField.setValue("DemoUser");

        EditField passwordEditField = browser.describe(EditField.class, new EditFieldDescription.Builder()
                .name("password")
                .tagName("INPUT")
                .type("password").build());
        passwordEditField.setSecure("152c5a83deec6a94bdd48fe1604bce");

        Button signInBtnundefinedButton = browser.describe(Button.class, new ButtonDescription.Builder()
                .buttonType("button")
                .name("SIGN IN")
                .tagName("BUTTON").build());
        signInBtnundefinedButton.click();

        Link userMenuLink1 = browser.describe(Link.class, new LinkDescription.Builder()
                .innerText("DemoUser My account My orders Sign out ")
                .tagName("A").build());
        userMenuLink1.click();

        Link signOutLink = browser.describe(Link.class, new LinkDescription.Builder()
                .innerText("Sign out")
                .tagName("LABEL").build());
        signOutLink.click();


    }
}
