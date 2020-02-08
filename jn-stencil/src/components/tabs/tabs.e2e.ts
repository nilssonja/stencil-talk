import { newE2EPage } from '@stencil/core/testing';

describe('jn-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jn-tabs></jn-tabs>');

    const element = await page.find('jn-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
