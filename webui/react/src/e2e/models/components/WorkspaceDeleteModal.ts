import { BaseComponent } from 'e2e/models/BaseComponent';
import { Modal } from 'e2e/models/hew/Modal';

/**
 * Returns a representation of the Workspace delete modal component.
 * @param {object} obj
 * @param {implementsGetLocator} obj.parent - The parent used to locate this Page
 * @param {string} [obj.selector] - Used instead of `defaultSelector`
 */
export class WorkspaceDeleteModal extends Modal {
  readonly nameConfirmation: BaseComponent = new BaseComponent({
    parent: this,
    selector: 'input[id="workspaceName"]',
  });
}
