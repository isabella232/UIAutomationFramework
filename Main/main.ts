/// <reference path="../bootstrap.ts" />
import 'mocha';

import { timers } from 'jquery'

import { Button } from "../Controls/Button"
import { Textbox } from "../Controls/Textbox"
import { Dropdown } from "../Controls/Dropdown"
import { Infobox } from "../Controls/Infobox"
import { CreateNewDropdownButton } from "../Controls/AdvancedControls/CreateNewDropdownButton"
import { VirtualMachinesGrid } from '../Controls/AdvancedControls/VirtualMachinesGrid'

import * as WBSelectors from "../Resources/workloadBuilderSelector"
import * as Utilities from "../Utilities/Utils"
import { assert } from 'chai';


describe('Load Migration Page', async function() {
    let page: any;
    before(async function () {
        page = await browser.newPage();
        await page.goto("https://aka.ms/workloadbuilder");
        
        let button = new Button("MigrateJBoss", WBSelectors.PreCheckTab.migrateJBossButton, page);
        await button.init();

        it('Should contain JBOSS Button on Page', async function(done){
            assert(await button.exists(), "JBOSS button does not exist");
            done();
        });

        describe('Load Workload Builder Page', async function(){
            await button.click();

            //create generator/loader to generate code for the page through JSON/YAML injestion
            //todo: sisatias
            await page1(page);
            await page2(page);
            await page3(page);
            await page4(page);
            await page5(page);
            await page6(page);
        });
    });

    after(async function () {
        //await page.close();
    })

    it('Not Implemented', async function () {

    });

});

async function page1(page: any) {
    //page 1
    let subscriptionDropdown = new Dropdown("Subscription Dropdown", WBSelectors.PreCheckTab.subscriptionDropdown, page);
    await subscriptionDropdown.init();
    await subscriptionDropdown.loading();
    await subscriptionDropdown.input("Workload Builder BVT Testing");

    let workloadDropdown = new Dropdown("Workload Dropdown", WBSelectors.PreCheckTab.workloadDropdown, page);
    await workloadDropdown.init();
    await workloadDropdown.loading();

    let workloadCreateNew = new CreateNewDropdownButton("Create New Workload", WBSelectors.PreCheckTab.workloadCreateNewButton, page);
    await workloadCreateNew.init();
    await workloadCreateNew.input("sisatia-wb10");

    await Utilities.delay(1000);
    let versionTextbox = new Textbox("Version Textbox", WBSelectors.PreCheckTab.versionTextbox, page);
    await versionTextbox.input("v1");

    let instanceTextbox = new Textbox("Instance Textbox", WBSelectors.PreCheckTab.instanceTextbox, page);
    await instanceTextbox.input("i1");

    let rgDropdown = new Dropdown("ResourceGroup Dropdown", WBSelectors.PreCheckTab.resourceGroupDropdown, page);
    await rgDropdown.init();
    await rgDropdown.loading();
    await rgDropdown.input("sisatia-df10");

    let nextButton = new Button("Next Migration Package", WBSelectors.PreCheckTab.nextMigrationPackageButton, page);
    await nextButton.init();
    await nextButton.click();
}

async function page2(page: any) {
    //page 2
    await Utilities.checkElementExistenceToggled("UI Shield", WBSelectors.Common.uiShield, page);

    let storageDropdown = new Dropdown("Storage", WBSelectors.PrereqCreationTab.storageDropdown, page);
    await storageDropdown.init();
    await storageDropdown.input("wblsa79128152339");

    let keyVaultDropdown = new Dropdown("Keyvault", WBSelectors.PrereqCreationTab.keyVaultDropdown, page);
    await keyVaultDropdown.init();
    await keyVaultDropdown.input("wbkv79128152339");

    let appinsightDropdown = new Dropdown("Appinsight", WBSelectors.PrereqCreationTab.appInsightDropdown, page);
    await appinsightDropdown.init();
    await appinsightDropdown.input("wbappinsights791281523");

    let createPrereqButton = new Button("Create Prereq", WBSelectors.PrereqCreationTab.generateMigrationPackage, page);
    await createPrereqButton.init();
    await createPrereqButton.click();

    await Utilities.checkElementExistenceToggled("UI Shield", WBSelectors.Common.uiShield, page);

    let checkPrereq = new Button("Check Prereq", WBSelectors.PrereqCreationTab.checkPrerequisiteButton, page);
    await checkPrereq.init();
    await checkPrereq.click();
    
    let infobox = new Infobox("Prereq Success Box", WBSelectors.PrereqCreationTab.successInfoBox, page);
    
    var elementPresent: boolean = false;
    while(!elementPresent) {
        await Utilities.delay(10000);
        await checkPrereq.click();
        elementPresent = await infobox.exists();
    }
    
    let nextButton = new Button("Next: VM", WBSelectors.PrereqCreationTab.nextVMButton, page);
    await nextButton.init();
    await nextButton.click();
}

async function page3(page: any) {
    //page 3
    let migrationDropDown = new Dropdown("Migration", WBSelectors.VirtualMachinesTab.migrationDropdown, page);
    await migrationDropDown.init();
    await migrationDropDown.loading();
    await migrationDropDown.input("wb-common-test-wbvcenter (wb-common-test-migration-canary-wbvcenter)");

    let applianceDropDown = new Dropdown("Appliance", WBSelectors.VirtualMachinesTab.applianceDropdown, page);
    await applianceDropDown.init();
    await applianceDropDown.loading();
    await applianceDropDown.input("WBAppliance");

    await Utilities.checkElementExistenceToggled("UI Shield", WBSelectors.Common.uiShield, page);

    let vmGrid = new VirtualMachinesGrid("Discovery Machines", "", page);
    await vmGrid.input("JBossEAP-06");
    await vmGrid.input("JbossEAP-10");
    logger.info("Input done");

    let createAssessmentButton = new Button("Create Assessment", WBSelectors.VirtualMachinesTab.createAssessmentButton, page);
    await createAssessmentButton.init();
    await createAssessmentButton.click();

    await Utilities.checkElementExistenceToggled("UI Shield", WBSelectors.Common.uiShield, page);

    let nextButton = new Button("Next: Deep Discovery", WBSelectors.VirtualMachinesTab.nextDeepDiscoveryButton, page);
    await nextButton.init();
    await nextButton.click();
}

async function page4(page: any) {
    //page 4
    await Utilities.checkElementExistenceToggled("UI Shield", WBSelectors.Common.uiShield, page);

    let infobox = new Infobox("Version Success Box", WBSelectors.DeepDiscoveryTab.successInfoBox, page);
    await infobox.pollexists();

    let nextButton = new Button("Next: Review", WBSelectors.DeepDiscoveryTab.nextReviewButton, page);
    await nextButton.init();
    await nextButton.click();

}

async function page5(page: any) {
    //await Utilities.toggleElementExistence("UI Shield", WBSelectors.Common.uiShield, page);

    let rgDropdown = new Dropdown("ResourceGroup Dropdown", WBSelectors.ReviewTab.resourceGroupDropdown, page);
    await rgDropdown.init();
    await rgDropdown.loading();
    await rgDropdown.input("sisatia-df10");

    let nextButton = new Button("Next: Deploy", WBSelectors.ReviewTab.nextDeployButton, page);
    await nextButton.init();
    await nextButton.click();

}

async function page6(page: any) {
    //page 6
    await Utilities.checkElementExistenceToggled("UI Shield", WBSelectors.Common.uiShield, page);
    
    let infobox = new Infobox("Instance Success Box", WBSelectors.DeployTab.successInfoBox, page);
    await infobox.pollexists();

    let nextButton = new Button("Next: CompleteMigration", WBSelectors.DeployTab.nextCompleteMigration, page);
    await nextButton.init();
    await nextButton.click();
}