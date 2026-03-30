// Type augmentation for window.avnstack API exposed via preload
import type { AVNStackAPI } from '../../main/preload';

declare global {
  interface Window {
    avnstack: AVNStackAPI;
  }
}
