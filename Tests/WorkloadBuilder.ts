/// <reference path="../bootstrap.ts" />
import 'mocha';
import * as WBSelectors from "../Resources/workloadBuilderSelector"
import { TestButton } from "../TestControls/Button";
import { TestDropdown } from "../TestControls/Dropdown"
import { TestTextbox } from "../TestControls/Textbox"
import { TestCreateNewDropdownButton } from "../TestControls/AdvancedControls/CreateNewDropdownButton"
import { BaseTestClass } from "./BaseTestClass"

export class WorkloadBuilder extends BaseTestClass {

    public async runTests(page: any) {
        describe('JBoss Workload Builder', async function () {

            let migrationJBossButton: TestButton;
            let subscriptonDropdown: TestDropdown;
            let workloadDropdown: TestDropdown;
            let workloadCreateNew: TestCreateNewDropdownButton;
            let versionTextbox: TestTextbox;
            let instanceTextbox: TestTextbox;
            let rgDropdown: TestDropdown;
            let nextButton: TestButton;

            describe('Migrate JBoss Button Exists', async function () {
                before(async function () {
                    migrationJBossButton = new TestButton("MigrateJBoss Button", WBSelectors.PreCheckTab.migrateJBossButton, page);
                    await migrationJBossButton.init();
                })

                it('Run Tests', async function () {
                    await migrationJBossButton.testExists();
                    await migrationJBossButton.button.click();
                })

                after(async function () {
                    describe('Subscription Dropdown Exists', async function () {
                        before(async function () {
                            subscriptonDropdown = new TestDropdown("Subscription Dropdown", WBSelectors.PreCheckTab.subscriptionDropdown, page);
                            await subscriptonDropdown.init();
                            await subscriptonDropdown.dropdown.loading();
                        })

                        it('Run Test', async function () {
                            await subscriptonDropdown.testExists();
                        })

                        after(async function () {
                            describe('Subscription Dropdown Input', async function () {
                                before(async function () {
                                    await subscriptonDropdown.dropdown.input("Workload Builder BVT Testing");
                                })
                                it('Subscription Dropdown Input', async function () {
                                    await subscriptonDropdown.testInput("Workload Builder BVT Testing");
                                });

                                after(async function () {
                                    describe('Workload Dropdown Exists', async function () {
                                        before(async function () {
                                            workloadDropdown = new TestDropdown("Workload Dropdown", WBSelectors.PreCheckTab.workloadDropdown, page);
                                            await workloadDropdown.init();
                                            await workloadDropdown.dropdown.loading();
                                        })

                                        it('Run Test', async function () {
                                            await workloadDropdown.testExists();
                                        })

                                        after(async function () {
                                            describe('Create New Workload Exists', async function () {
                                                before(async function () {
                                                    workloadCreateNew = new TestCreateNewDropdownButton("Create New Workload", WBSelectors.PreCheckTab.workloadCreateNewButton, page);
                                                    await workloadCreateNew.init();
                                                })

                                                it('Run Test', async function () {
                                                    await workloadCreateNew.testExists();
                                                })

                                                after(async function () {
                                                    describe('Create New Workload Input', async function () {
                                                        before(async function () {
                                                            await workloadCreateNew.createNew.input("sisatia-wb14");
                                                        })
        
                                                        it('Run Test', async function () {
                                                            await workloadCreateNew.testInput("(New) sisatia-wb14", workloadDropdown);
                                                        })
        
                                                        after(async function () {
                                                            before(async function () {
                                                                await workloadCreateNew.createNew.input("sisatia-wb14");
                                                            })
            
                                                            it('Run Test', async function () {
                                                                await workloadCreateNew.testInput("(New) sisatia-wb14", workloadDropdown);
                                                            })
            
                                                            after(async function () {
                                                                //Proceed in the same fashion from here onwards
                                                            })
                                                        })
                                                    });
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        });
                    })
                });
            });

            /* Actual Individual Test Cases */

            // it('Subscription Dropdown', async function() {
            //     subscriptonDropdown = new TestDropdown("Subscription Dropdown", WBSelectors.PreCheckTab.subscriptionDropdown, page);
            //     await subscriptonDropdown.init();
            //     await subscriptonDropdown.dropdown.loading();
            //     //await subscriptonDropdown.testExists();
            // });

            // it('Subscription Dropdown Input', async function() {
            //     await subscriptonDropdown.dropdown.input("Workload Builder BVT Testing");
            //     await subscriptonDropdown.testInput("Workload Builder BVT Testing");
            // });

            // it('Workload Dropdown Exists', async function() {
            //     workloadDropdown = new TestDropdown("Workload Dropdown", WBSelectors.PreCheckTab.workloadDropdown, page);
            //     await workloadDropdown.init();
            //     await workloadDropdown.testExists();
            //     await workloadDropdown.dropdown.loading();
            // });

            // it('Create New Workload Exists', async function() {
            //     workloadCreateNew = new TestCreateNewDropdownButton("Create New Workload", WBSelectors.PreCheckTab.workloadCreateNewButton, page);
            //     await workloadCreateNew.init();
            //     await workloadCreateNew.testExists();
            // })

            // it('Create New Workload Input', async function() {
            //     await workloadCreateNew.createNew.input("sisatia-wb14");
            //     await workloadCreateNew.testInput("(New) sisatia-wb14", workloadDropdown);
            // })

            // it('Version Textbox Exists', async function() {
            //     versionTextbox = new TestTextbox("Version Textbox", WBSelectors.PreCheckTab.versionTextbox, page);
            //     await versionTextbox.init();
            //     await versionTextbox.testExists();
            // })

            // it('Version Textbox Input Matches', async function() {
            //     await versionTextbox.textbox.input("sisatia-v1");
            //     await versionTextbox.testInput("sisatia-v1");
            // })

            // it('Version Textbox Input Valid', async function() {
            //     await versionTextbox.testValidity();
            // })

            // it('Instance Textbox Exists', async function() {
            //     instanceTextbox = new TestTextbox("Instance Textbox", WBSelectors.PreCheckTab.instanceTextbox, page);
            //     await instanceTextbox.init();
            //     await instanceTextbox.testExists();
            // })

            // it('Instance Textbox Input Matches', async function() {
            //     await instanceTextbox.textbox.input("sisatia-v1");
            //     await instanceTextbox.testInput("sisatia-v1");
            // })

            // it('Instance Textbox Input Valid', async function() {
            //     //Adding this line for testing purpose of empty validation
            //     //await instanceTextbox.textbox.input("");
            //     await instanceTextbox.testValidity();
            // })

            // it('Resource Group Dropdown', async function() {
            //     rgDropdown = new TestDropdown("Resource Dropdown", WBSelectors.PreCheckTab.resourceGroupDropdown, page);
            //     await rgDropdown.init();
            //     await rgDropdown.testExists();
            // });

            // it('Resource Group Dropdown Input', async function() {
            //     await rgDropdown.dropdown.loading();
            //     await rgDropdown.dropdown.input("sisatia-test");
            //     await rgDropdown.testInput("sisatia-test");
            // });

            // it('Next Button: Migration Package', async function() {
            //     nextButton = new TestButton("Next: Migration Package", WBSelectors.PreCheckTab.nextMigrationPackageButton, page);
            //     await nextButton.init();
            //     await nextButton.testExists();
            //     await nextButton.button.click();
            // })

        });
    }
}