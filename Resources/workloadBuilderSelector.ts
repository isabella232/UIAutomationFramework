
export class Common {
    static readonly wbUrl: string = 'https://aka.ms/workloadbuilder'
    static readonly wbUrlLocalHost: string = 
    'https://ms.portal.azure.com/?feature.allowMultipleMigrateProjects=true&feature.customPortal=false&feature.eCSettingEnableAgentlessDepMapping=enabled&feature.allowAppInventory=true&feature.allowPhysicalAssessment=true&feature.importFeature=enabled&feature.WebAppsGoal=true&feature.enableExploreMoreTile=true&feature.canmodifyextensions=true&feature.disableBatch=true&clientOptimizations=false#blade/Microsoft_Azure_Migrate/AmhResourceMenuBlade/jbossMigration?testExtensions={%22Microsoft_Azure_Migrate%22:%22https://localhost:44300/%22}';
    static readonly createNewTextbox: string = 
    '.azc-input.azc-formControl.azc-validation-border.msportalfx-tooltip-overflow[placeholder=\"CreateNew\"]';
    static readonly createNewOkButton: string = 
    '.fxs-button.fxt-button.fxs-inner-solid-border.fxs-portal-button-primary[title=\"OK\"][aria-disabled=\"false\"]';
    static readonly uiShield: string = 'div.fxs-part-blockui-shield';
    static readonly dropdownFilterBox: string = 
    '.azc-input.azc-formControl.msportalfx-tooltip-overflow.azc-validation-border.azc-br-focused[role="textbox"][type="text"]';
    static readonly vmGridFilterBox: string = '[placeholder="Search to filter machines"]';
}

export class PreCheckTab {
    static readonly migrateJBossButton: string = '[title="Migrate JBoss"]';
    static readonly subscriptionDropdown: string = '[aria-label=\"Subscription Dropdown\"]';
    static readonly resourceGroupDropdown: string = '[aria-label=\"Create new or use existing ResoureceGroup dropdown\"]';
    static readonly workloadDropdown: string = '[aria-label=\"Workload Dropdown\"]';
    static readonly workloadCreateNewButton: string = '.fxt-workload-create';
    static readonly versionTextbox: string = '[aria-label=\"Version Textbox\"]';
    static readonly instanceTextbox: string = '[aria-label=\"Instance Textbox\"]';
    static readonly nextMigrationPackageButton: string = '[title=\"Next: Migration Package\"]';
}

export class PrereqCreationTab {
    static readonly storageDropdown: string = '[aria-label=\"Storage Dropdown\"]';
    static readonly keyVaultDropdown: string = '[aria-label=\"KeyVault Dropdown\"]';
    static readonly appInsightDropdown: string = '[aria-label=\"ApplicationInsights Dropdown\"]';
    static readonly generateMigrationPackage: string = '[title="Generate Migration Agent Package"]';
    static readonly checkPrerequisiteButton: string = '[title="Check the prerequisites"]'
    static readonly successInfoBox: string = '.fxc-infoBox-container.fxs-portal-border.fxc-infobox-size-normal.fxt-infoBox-container.fxc-infoBox-Success'
    static readonly nextVMButton: string = '[title=\"Next: Select VMs for Migration\"]'
}

export class VirtualMachinesTab {
    //Migration/Appliance dropdown selectors are present in local host for now and not released.
    static readonly migrationDropdown: string = '[aria-label=\"Migration Dropdown\"]';
    static readonly applianceDropdown: string = '[aria-label=\"Appliance Dropdown\"]';
    static readonly createAssessmentButton: string = '[title=\"Create Assessment\"]';
    static readonly nextDeepDiscoveryButton: string = '[title=\"Next: Deep-Discovery\"]';
}

export class DeepDiscoveryTab {
    static readonly successInfoBox: string = '[aria-label=\"OK to migration, click “Next” button to review and customize\"]';
    static readonly nextReviewButton: string = '[title=\"Next: Review\"]';
}

export class ReviewTab {
    static readonly resourceGroupDropdown: string = '[aria-label=\"Create new or use existing Resource group\"]';
    static readonly nextDeployButton: string = '[title=\"Next: Deployment and Migration\"]';
}

export class DeployTab {
    static readonly successInfoBox: string = '[aria-label=\"Instance resource has been successfuly deployed. Click \'Next\' to view summary\"]';
    static readonly nextCompleteMigration: string = '[title=\"Next: Complete Migration\"]';
}

export class Constants {
    
}