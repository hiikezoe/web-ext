/* @flow */
import path from 'path';

import {it, describe} from 'mocha';
import fs from 'mz/fs';
import {assert} from 'chai';

import {withTempDir} from '../../../src/util/temp-dir';
import create from '../../../src/cmd/create';

describe('create', () => {
  it('passes project path', () => withTempDir(async (tmpDir) => {
    const projectPath = path.join(tmpDir.path(), 'new-project-path');
    await create({ projectPath, useLatest: false });

    assert.ok((await fs.stat(projectPath)).isDirectory());

    const iconPath = path.join(projectPath, 'icon.png');
    assert.ok((await fs.stat(iconPath)).isFile());
  }));
});
