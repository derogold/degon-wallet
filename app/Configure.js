// Copyright (C) 2019 ExtraHash
//
// Please see the included LICENSE file for more information.

import { MixinLimit, MixinLimits, Daemon } from 'turtlecoin-wallet-backend';
import { name, version } from '../package.json';

// prettier-ignore
const Configure = new function () {
  /**
   * If you can't figure this one out, I don't have high hopes
   */
  this.coinName = 'DeroGold';

  /**
   * Prefix for URI encoded addresses
   */
  this.uriPrefix = 'derogold://';

  /**
   * How often to save the wallet, in milliseconds
   */
  this.walletSaveFrequency = 60 * 1000;

  /**
   * The amount of decimal places your coin has, e.g. TurtleCoin has two
   * decimals
   */
  this.decimalPlaces = 2;

  /**
   * The address prefix your coin uses - you can find this in CryptoNoteConfig.h.
   * In TurtleCoin, this converts to dg
   */
  this.addressPrefix = 8411;

  /**
   * Request timeout for daemon operations in milliseconds
   */
  this.requestTimeout = 30 * 1000;

  /**
   * The block time of your coin, in seconds
   */
  this.blockTargetTime = 20;

  /**
   * How often to process blocks, in millseconds
   */
  this.syncThreadInterval = 10;

  /**
   * How often to update the daemon info, in milliseconds
   */
  this.daemonUpdateInterval = 15 * 1000;

  /**
   * How often to check on locked transactions
   */
  this.lockedTransactionsCheckInterval = 30 * 1000;

  /**
   * The amount of blocks to process per 'tick' of the mainloop. Note: too
   * high a value will cause the event loop to be blocked, and your interaction
   * to be laggy.
   */
  this.blocksPerTick = 100;

  /**
   * Your coins 'ticker', generally used to refer to the coin, i.e. 123 TRTL
   */
  this.ticker = 'DEGO';

  /**
   * Most people haven't mined any blocks, so lets not waste time scanning
   * them
   */
  this.scanCoinbaseTransactions = true;

  /**
   * The minimum fee allowed for transactions, in ATOMIC units
   */
  this.minimumFee = 1000000;

  /**
   * Mapping of height to mixin maximum and mixin minimum
   */
  this.mixinLimits = new MixinLimits(
    [
      /* At height of 1,470,000 */
      new MixinLimit(1470000, 0, 3, 1)
    ],
    0 /* Default mixin of 3 before block 440,000 */
  );

  /**
   * The length of a standard address for your coin
   */
  this.standardAddressLength = 97;

  /**
   * The length of an integrated address for your coin - It's the same as
   * a normal address, but there is a paymentID included in there - since
   * payment ID's are 64 chars, and base58 encoding is done by encoding
   * chunks of 8 chars at once into blocks of 11 chars, we can calculate
   * this automatically
   */
  this.integratedAddressLength = 97 + (64 * 11) / 8;

  /**
   * Memory to use for storing downloaded blocks - 32MB
   */
  this.blockStoreMemoryLimit = 1024 * 1024 * 64;

  /**
   * Amount of blocks to request from the daemon at once
   */
  this.blocksPerDaemonRequest = 20;

  /**
   * User agent string
   */
  this.customUserAgentString = `${name}-v${version}`;

  this.customRequestOptions = { pool: { maxSockets: 100 }, agent: false };

  /**
   * Unix timestamp of the time your chain was launched.
   *
   * Note - you may want to manually adjust this. Take the current timestamp,
   * take away the launch timestamp, divide by block time, and that value
   * should be equal to your current block count. If it's significantly different,
   * you can offset your timestamp to fix the discrepancy
   */
  this.chainLaunchTimestamp = new Date(1000 * 1545261161);

  /**
   * Fee to take on all transactions, in percentage
   */
  this.devFeePercentage = 0.5;

  /**
   * Address to send dev fee to
   */
  this.devFeeAddress =
    'dg3oiDZ9qKnXPmL1jq1HDGWKp9XngqgZTctc4715tcp2BQ4Rb1aCH6oYPR2SSjH9UnWCsQ69HWNEADcsRetsucai19rvJnHc1';

  /**
   * Base url for price API
   *
   * The program *should* fail gracefully if your coin is not supported, or
   * you just set this to an empty string. If you have another API you want
   * it to support, you're going to have to modify the code in Currency.js.
   */
  this.priceApiLink = 'https://api.coingecko.com/api/v3/simple/price';

  /**
   * Default daemon to use. Can either be a BlockchainCacheApi(baseURL, SSL),
   * or a ConventionalDaemon(url, port).
   */
  this.defaultDaemon = new Daemon('dego.bot.tips', 443);

  /**
   * A url to fetch node info from. Should follow the turtlepay format
   * detailed here: https://docs.turtlepay.io/blockapi/
   */

  this.DefaultDaemonRPCPort = '6969';

  this.nodeListURL = 'http://dego-nodes.bot.tips/list';

  this.ExplorerURL = 'http://cuveedego.czech.cloud';

  this.GitHubRepo = 'https://github.com/derogold/dego-wallet-pluton';

  this.DiscordURL = 'https://derogold.gq';
}

export default Configure;
