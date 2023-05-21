import Text "mo:base/Text";
import Float "mo:base/Float";

actor {
  stable var buffer : Float = 0;
  public func add(value : Float) : async() {
    buffer := buffer + value;  
  };
  public func sub(value : Float) : async() {
    buffer := buffer - value;
  };
  public func mul(value : Float) : async() {
    buffer := buffer * value;
  };
  public func div(value : Float) : async() {
    buffer := buffer / value;
  };
  public func mod(value : Float) : async() {
    buffer := buffer % value;
  };
  public func pow(value : Float) : async() {
    buffer := buffer ** value;
  };
  public func sqrt() : async() {
    buffer := Float.sqrt(buffer);
  };
  public func clear() : async() {
    buffer := 0;
  };
  public query func getValue() : async Text {
    return Float.toText(buffer);
  };
};
