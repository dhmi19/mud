// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { Schema } from "@latticexyz/store/src/Schema.sol";

import { ISystemHook } from "./ISystemHook.sol";
import { IModule } from "./IModule.sol";

/**
 * The IWorldCore interfaces includes all World methods with a static function selector.
 * Consumers should use the `IWorld` interface instead, which includes
 * dynamically registered function selectors (e.g. IRegistrationSystem)
 */
interface IWorldCore {
  /**
   * Install the given module at the given namespace in the World.
   */
  function installModule(IModule module, bytes memory args) external;

  /**
   * Install the given root module in the World.
   * Requires the caller to own the root namespace.
   * The module is delegatecalled and installed in the root namespace.
   */
  function installRootModule(IModule module, bytes memory args) external;

  /************************************************************************
   *
   *    ACCESS METHODS
   *
   ************************************************************************/

  /**
   * Grant access to the given namespace.
   * Requires the caller to own the namespace.
   */
  function grantAccess(bytes16 namespace, address grantee) external;

  /**
   * Grant access to the resource at the given namespace and file.
   * Requires the caller to own the namespace.
   */
  function grantAccess(bytes16 namespace, bytes16 file, address grantee) external;

  /**
   * Retract access from the resource at the given namespace and file.
   */
  function retractAccess(bytes16 namespace, bytes16 file, address grantee) external;

  /************************************************************************
   *
   *    STORE METHODS
   *
   ************************************************************************/

  /**
   * Write a record in the table at the given namespace and file.
   * Requires the caller to have access to the namespace or file.
   */
  function setRecord(bytes16 namespace, bytes16 file, bytes32[] calldata key, bytes calldata data) external;

  /**
   * Write a field in the table at the given namespace and file.
   * Requires the caller to have access to the namespace or file.
   */
  function setField(
    bytes16 namespace,
    bytes16 file,
    bytes32[] calldata key,
    uint8 schemaIndex,
    bytes calldata data
  ) external;

  /**
   * Push data to the end of a field in the table at the given namespace and file.
   * Requires the caller to have access to the namespace or file.
   */
  function pushToField(
    bytes16 namespace,
    bytes16 file,
    bytes32[] calldata key,
    uint8 schemaIndex,
    bytes calldata dataToPush
  ) external;

  /**
   * Delete a record in the table at the given namespace and file.
   * Requires the caller to have access to the namespace or file.
   */
  function deleteRecord(bytes16 namespace, bytes16 file, bytes32[] calldata key) external;

  /************************************************************************
   *
   *    SYSTEM CALLS
   *
   ************************************************************************/

  /**
   * Call the system at the given namespace and file.
   * If the system is not public, the caller must have access to the namespace or file.
   */
  function call(bytes16 namespace, bytes16 file, bytes memory funcSelectorAndArgs) external returns (bytes memory);
}
