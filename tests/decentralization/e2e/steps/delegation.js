// @flow
import { Given, Then } from 'cucumber';
import { navigateTo, waitUntilUrlEquals } from '../../../navigation/e2e/steps/helpers';

Given(/^I am on the Delegation "([^"]*)" screen$/, async function(
  screenName
) {
  return navigateTo.call(this, `/staking/${screenName}`);
});

Then(/^I should see a "Create rewards wallet" notification$/, async function() {
  await this.client.waitForVisible('.DelegationCenterNoWallets_component');
})

Then(/^I should only see Reward wallets listed$/, async function() {
  await this.client.waitForVisible(
    `//div[@class="WalletRow_title" and starts-with(text(), "Reward Wallet")]`
  );
  await this.client.waitForVisible(
    `//div[@class="WalletRow_title" and starts-with(text(), "Legacy Wallet")]`
  , null, true);
})

Then(/^the current and next epoch countdown are correctly displayed$/, async function() {
  await this.client.waitForVisible('.DelegationCenterHeader_countdownContainer');
  await this.client.waitForVisible('.DelegationCenterHeader_heading');
  await this.client.waitForVisible('.DelegationCenterHeader_epochsContainer');
  await this.client.waitForVisible('.CountdownWidget_timeLeftContainer');
})

// Then(/^the current and next epoch countdown have correct data$/, async function() {
// })

Then(/^I should see the "delegate" option$/, async function() {
  await this.client.waitForVisible(
    `//span[@class="WalletRow_actionLink" and text()="Delegate"]`
  );
})
