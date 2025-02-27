import { render, screen, waitForElementToBeRemoved } from '@testing-library/angular';

import { CdkVirtualScrollOverviewExample } from './13-scrolling.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

test('should scroll to load more items', async () => {
  await render(CdkVirtualScrollOverviewExample, {
    imports: [ScrollingModule],
  });

  const item0 = await screen.findByText(/Item #0/i);
  expect(item0).toBeVisible();

  screen.getByTestId('scroll-viewport').scrollTop = 500;
  await waitForElementToBeRemoved(() => screen.getByText(/Item #0/i));

  const item12 = await screen.findByText(/Item #12/i);
  expect(item12).toBeVisible();
});
