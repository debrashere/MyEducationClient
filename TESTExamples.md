####Cheat Sheet
https://devhints.io/enzyme

####Debugging
console.log(wrapper.debug()); 

####https://jestjs.io/docs/en/expect


#### REACT Wrapper Traversal
wrap.find('button')   // → ReactWrapper
wrap.filter('button') // → ReactWrapper
wrap.not('span')      // → ReactWrapper (inverse of filter())
wrap.children()       // → ReactWrapper
wrap.parent()         // → ReactWrapper
wrap.closest('div')   // → ReactWrapper
wrap.childAt(0)       // → ReactWrapper
wrap.at(0)            // → ReactWrapper
wrap.first()          // → ReactWrapper
wrap.last()           // → ReactWrapper
wrap.get(0)           // → ReactElement
wrap.getNode()        // → ReactElement
wrap.getNodes()       // → Array<ReactElement>
wrap.getDOMNode()     // → DOMComponent

####Exampples
expect(
  wrap.find('button').text()
).toEqual('Submit')


const wrapper = mount(<MyComponent />);
expect(wrapper.getDOMNode()).to.have.property('className');
expect(wrapper.find(Foo).render().text()).to.equal('Hello World')



describe('With Snapshot Testing', () => {
  it('About shows "About"', () => {
    const component = renderer.create(<About />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
}

#### HTML
 //expect((prices[index]).getElements().matchesElement(target)).toBe(true);
            //expect(prices[index]).toBe(<span className="item"><strong>Price:</strong> Free</span>,);
            //expect((<span className="item"><strong>Price:</strong> Free</span>)).matchesElement(<span className="item"><strong>Price:</strong> Free</span>).toBe(true);
            //expect(prices[index].matchesElement(<span className="item"><strong>Price:</strong> Free</span>)).toBe(true);
             //expect(prices[index]).containsMatchingElement(<span className="item"><strong>Price:</strong> Free</span>).toBeTruthy();
                console.log(prices[index].props);
             /*
            //expect(prices[index].toBe(<span className="item"><strong>Price:</strong> Free</span>));
            if (thisTools[index].price === 0) {
                expect(prices[index]).toEqual(<span className="item"><strong>Price:</strong> Free</span>,);
            }
            else
            expect(prices[index]).toEqual(`<span className="item"><strong>Price:</strong> ${thisTools[index].price}</span>`);
            */

####EXPECT            
expect(value)
expect.extend(matchers)
expect.anything()
expect.any(constructor)
expect.arrayContaining(array)
expect.assertions(number)
expect.hasAssertions()
expect.not.arrayContaining(array)
expect.not.objectContaining(object)
expect.not.stringContaining(string)
expect.not.stringMatching(string | regexp)
expect.objectContaining(object)
expect.stringContaining(string)
expect.stringMatching(string | regexp)
expect.addSnapshotSerializer(serializer)
.not
.resolves
.rejects
.toBe(value)
.toHaveBeenCalled()
.toHaveBeenCalledTimes(number)
.toHaveBeenCalledWith(arg1, arg2, ...)
.toHaveBeenLastCalledWith(arg1, arg2, ...)
.toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)
.toHaveReturned()
.toHaveReturnedTimes(number)
.toHaveReturnedWith(value)
.toHaveLastReturnedWith(value)
.toHaveNthReturnedWith(nthCall, value)
.toBeCloseTo(number, numDigits)
.toBeDefined()
.toBeFalsy()
.toBeGreaterThan(number)
.toBeGreaterThanOrEqual(number)
.toBeLessThan(number)
.toBeLessThanOrEqual(number)
.toBeInstanceOf(Class)
.toBeNull()
.toBeTruthy()
.toBeUndefined()
.toBeNaN()
.toContain(item)
.toContainEqual(item)
.toEqual(value)
.toHaveLength(number)
.toMatch(regexpOrString)
.toMatchObject(object)
.toHaveProperty(keyPath, value)
.toMatchSnapshot(propertyMatchers, snapshotName)
.toMatchInlineSnapshot(propertyMatchers, inlineSnapshot)
.toStrictEqual(value)
.toThrow(error)
.toThrowErrorMatchingSnapshot()
.toThrowErrorMatchingInlineSnapshot()