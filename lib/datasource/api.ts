import * as bitbucketTags from './bitbucket-tags';
import { CdnJsDatasource } from './cdnjs';
import { ClojureDatasource } from './clojure';
import * as crate from './crate';
import { DartDatasource } from './dart';
import * as docker from './docker';
import { GalaxyDatasource } from './galaxy';
import { GalaxyCollectionDatasource } from './galaxy-collection';
import { GitRefsDatasource } from './git-refs';
import { GitTagsDatasource } from './git-tags';
import * as githubReleases from './github-releases';
import * as githubTags from './github-tags';
import * as gitlabTags from './gitlab-tags';
import * as go from './go';
import { GradleVersionDatasource } from './gradle-version';
import { HelmDatasource } from './helm';
import { HexDatasource } from './hex';
import * as jenkinsPlugins from './jenkins-plugins';
import * as maven from './maven';
import * as npm from './npm';
import * as nuget from './nuget';
import { OrbDatasource } from './orb';
import * as packagist from './packagist';
import * as pod from './pod';
import * as pypi from './pypi';
import * as repology from './repology';
import { RubyVersionDatasource } from './ruby-version';
import * as rubygems from './rubygems';
import * as sbtPackage from './sbt-package';
import * as sbtPlugin from './sbt-plugin';
import { TerraformModuleDatasource } from './terraform-module';
import { TerraformProviderDatasource } from './terraform-provider';
import type { DatasourceApi } from './types';

const api = new Map<string, DatasourceApi>();
export default api;

api.set('bitbucket-tags', bitbucketTags);
api.set('cdnjs', new CdnJsDatasource());
api.set('clojure', new ClojureDatasource());
api.set('crate', crate);
api.set('dart', new DartDatasource());
api.set('docker', docker);
api.set('galaxy', new GalaxyDatasource());
api.set('galaxy-collection', new GalaxyCollectionDatasource());
api.set('git-refs', new GitRefsDatasource());
api.set('git-tags', new GitTagsDatasource());
api.set('github-releases', githubReleases);
api.set('github-tags', githubTags);
api.set('gitlab-tags', gitlabTags);
api.set('go', go);
api.set('gradle-version', new GradleVersionDatasource());
api.set('helm', new HelmDatasource());
api.set('hex', new HexDatasource());
api.set('jenkins-plugins', jenkinsPlugins);
api.set('maven', maven);
api.set('npm', npm);
api.set('nuget', nuget);
api.set('orb', new OrbDatasource());
api.set('packagist', packagist);
api.set('pod', pod);
api.set('pypi', pypi);
api.set('repology', repology);
api.set('ruby-version', new RubyVersionDatasource());
api.set('rubygems', rubygems);
api.set('sbt-package', sbtPackage);
api.set('sbt-plugin', sbtPlugin);
api.set('terraform-module', new TerraformModuleDatasource());
api.set('terraform-provider', new TerraformProviderDatasource());
