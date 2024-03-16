import { test as fixture } from '@playwright/test'
import HomePage from '../pages/homePage'


const test = fixture.extend({
	homePage: async ({ page }, use) => {
		await use(new HomePage(page))
	}
})
export default test