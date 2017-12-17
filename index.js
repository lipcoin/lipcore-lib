'use strict';

var lipcore = module.exports;

// module information
lipcore.version = 'v' + require('./package.json').version;
lipcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of lipcore-lib found. ' +
      'Please make sure to require lipcore-lib and check that submodules do' +
      ' not also include their own lipcore-lib dependency.';
    throw new Error(message);
  }
};
lipcore.versionGuard(global._lipcore);
global._lipcore = lipcore.version;

// crypto
lipcore.crypto = {};
lipcore.crypto.BN = require('./lib/crypto/bn');
lipcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
lipcore.crypto.Hash = require('./lib/crypto/hash');
lipcore.crypto.Random = require('./lib/crypto/random');
lipcore.crypto.Point = require('./lib/crypto/point');
lipcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
lipcore.encoding = {};
lipcore.encoding.Base58 = require('./lib/encoding/base58');
lipcore.encoding.Base58Check = require('./lib/encoding/base58check');
lipcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
lipcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
lipcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
lipcore.util = {};
lipcore.util.buffer = require('./lib/util/buffer');
lipcore.util.js = require('./lib/util/js');
lipcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
lipcore.errors = require('./lib/errors');

// main bitcoin library
lipcore.Address = require('./lib/address');
lipcore.Block = require('./lib/block');
lipcore.MerkleBlock = require('./lib/block/merkleblock');
lipcore.BlockHeader = require('./lib/block/blockheader');
lipcore.HDPrivateKey = require('./lib/hdprivatekey.js');
lipcore.HDPublicKey = require('./lib/hdpublickey.js');
lipcore.Networks = require('./lib/networks');
lipcore.Opcode = require('./lib/opcode');
lipcore.PrivateKey = require('./lib/privatekey');
lipcore.PublicKey = require('./lib/publickey');
lipcore.Script = require('./lib/script');
lipcore.Transaction = require('./lib/transaction');
lipcore.URI = require('./lib/uri');
lipcore.Unit = require('./lib/unit');

// dependencies, subject to change
lipcore.deps = {};
lipcore.deps.bnjs = require('bn.js');
lipcore.deps.bs58 = require('bs58');
lipcore.deps.Buffer = Buffer;
lipcore.deps.elliptic = require('elliptic');
lipcore.deps.scryptsy = require('scryptsy');
lipcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
lipcore.Transaction.sighash = require('./lib/transaction/sighash');
