var jsDAV       = require("./../jsdav"),
    jsDAV_iNode = require("./iNode").jsDAV_iNode;

/**
 * The ICollection Interface
 *
 * This interface should be implemented by each class that represents a collection
 */
function jsDAV_iCollection() {
    this.REGBASE = this.REGBASE | jsDAV.__ICOLLECTION__;

    /**
     * Creates a new file in the directory
     *
     * data is a readable stream resource
     *
     * @param string name Name of the file
     * @param resource data Initial payload
     * @return void
     */
    this.createFile = function(name, data) {};

    /**
     * Creates a new subdirectory
     *
     * @param string name
     * @return void
     */
    this.createDirectory = function(name) {};

    /**
     * Returns a specific child node, referenced by its name
     *
     * @param string name
     * @return jsDAV_INode
     */
    this.getChild = function(name) {};

    /**
     * Returns an array with all the child nodes
     *
     * @return jsDAV_INode[]
     */
    this.getChildren = function() {};
}

exports.jsDAV_iCollection = jsDAV_iCollection;

jsDAV_iCollection.prototype = new jsDAV_iNode();