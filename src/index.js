/**
 * A custom Gutenberg block with collapsible accordion behavior
 */
import { registerBlockType } from "@wordpress/blocks";
import { useState } from "@wordpress/element";
import { RichText, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

registerBlockType("custom/join-our-community", {
  title: "OpenMRS Join Our Community Accordion",
  icon: "groups",
  category: "layout",
  attributes: {
    title: {
      type: "string",
      default: "Join our community",
    },
    description: {
      type: "string",
      default:
        "From writing code to fundraising, there are so many ways to be at home in our community.",
    },
    items: {
      type: "array",
      default: [
        {
          label: "I’m a developer",
          content:
            "Getting started with coding for OpenMRS is a fantastic way to contribute to global health while honing your skills.",
        },
        {
          label: "I’m a healthcare provider",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
          label: "I’m a philanthropist",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
      ],
    },
    breadcrumb1: {
      type: "string",
      default: "Home",
    },
    breadcrumb1Url: {
      type: "string",
      default: "/",
    },
    breadcrumb2: {
      type: "string",
      default: "Product",
    },
    breadcrumb2Url: {
      type: "string",
      default: "/community",
    },
    breadcrumbCurrent: {
      type: "string",
      default: "Get involved",
    },
  },

  edit: ({ attributes, setAttributes }) => {
    const { title, description, items } = attributes;
    const [openIndex, setOpenIndex] = useState(null);

    const updateItem = (index, key, value) => {
      const updated = [...items];
      updated[index][key] = value;
      setAttributes({ items: updated });
    };

    return (
      <div className="container-large">
        <div className="padding-section-large border-top-16px border-purple">
          <div className="header44_component">
            <div className="max-width-large">
              <div
                className="margin-bottom margin-xsmall flex align-middle _8px-gap"
                style={{
                  justifyContent: "flex-start",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                <RichText
                  tagName="a"
                  className="text-style-breadcrumb"
                  value={attributes.breadcrumb1}
                  onChange={(val) => setAttributes({ breadcrumb1: val })}
                  href={attributes.breadcrumb1Url}
                  placeholder="Home"
                  allowedFormats={[]}
                  style={{ textAlign: "left" }}
                />
                <div className="code-icon is-small w-embed">
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.70697 11.9496L7.41397 6.24264L1.70697 0.535645L0.292969 1.94964L4.58597 6.24264L0.292969 10.5356L1.70697 11.9496Z"
                      fill="#666666"
                    ></path>
                  </svg>
                </div>
                <RichText
                  tagName="a"
                  className="text-style-breadcrumb"
                  value={attributes.breadcrumb2}
                  onChange={(val) => setAttributes({ breadcrumb2: val })}
                  href={attributes.breadcrumb2Url}
                  placeholder="Product"
                  allowedFormats={[]}
                  style={{ textAlign: "left" }}
                />
                <div className="code-icon is-small w-embed">
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.70697 11.9496L7.41397 6.24264L1.70697 0.535645L0.292969 1.94964L4.58597 6.24264L0.292969 10.5356L1.70697 11.9496Z"
                      fill="#666666"
                    ></path>
                  </svg>
                </div>
                <RichText
                  tagName="a"
                  className="text-style-breadcrumb is-current"
                  value={attributes.breadcrumbCurrent}
                  onChange={(val) => setAttributes({ breadcrumbCurrent: val })}
                  href="#"
                  placeholder="Get involved"
                  allowedFormats={[]}
                  style={{ textAlign: "left" }}
                />
              </div>
              <div className="margin-bottom margin-small">
                <RichText
                  tagName="h1"
                  className="heading-style-h1 text-color-scampi"
                  value={title}
                  onChange={(val) => setAttributes({ title: val })}
                  placeholder="Join our community"
                  allowedFormats={[]}
                  style={{ textAlign: "left", width: "100%" }}
                />
              </div>
              <RichText
                tagName="p"
                className="text-size-medium"
                value={description}
                onChange={(val) => setAttributes({ description: val })}
                placeholder="From writing code to fundraising, requirements gathering to clinical user testing, there are so many ways you can be at home in our community...."
                allowedFormats={[]}
                style={{ textAlign: "left", width: "100%" }}
              />
            </div>

            <div className="max-width-large">
              <div className="w-layout-grid faq5_list margin-top margin-xxlarge">
                {items.map((item, index) => (
                  <div
                    className={
                      "faq5_accordion" + (openIndex === index ? " open" : "")
                    }
                    key={index}
                  >
                    <div
                      className="faq5_question"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      style={{
                        userSelect: "none",
                        width: "100%",
                        textAlign: "left",
                      }}
                    >
                      <div
                        className="display-inlineflex"
                        style={{
                          justifyContent: "flex-start",
                          width: "100%",
                          textAlign: "left",
                        }}
                      >
                        <span
                          className="code-icon w-embed"
                          style={{ marginRight: "0.75rem" }}
                        >
                          <svg
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 0H2C0.897 0 0 0.897 0 2V16C0 17.103 0.897 18 2 18H18C19.103 18 20 17.103 20 16V2C20 0.897 19.103 0 18 0ZM2 16V4H18L18.002 16H2Z"
                              fill="#5B57A2"
                            ></path>
                            <path
                              d="M7.293 6.29297L3.586 9.99997L7.293 13.707L8.707 12.293L6.414 9.99997L8.707 7.70697L7.293 6.29297ZM12.707 6.29297L11.293 7.70697L13.586 9.99997L11.293 12.293L12.707 13.707L16.414 9.99997L12.707 6.29297Z"
                              fill="#5B57A2"
                            ></path>
                          </svg>
                        </span>
                        <RichText
                          tagName="span"
                          className="text-size-medium text-weight-semibold"
                          value={item.label}
                          onChange={(val) => updateItem(index, "label", val)}
                          placeholder="Accordion label"
                          allowedFormats={[]}
                          style={{ textAlign: "left", width: "100%" }}
                        />
                      </div>
                      <div className="faq5_icon-wrapper">
                        <span className="icon-embed-small w-embed">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div
                      className="faq5_answer"
                      style={{
                        maxHeight: openIndex === index ? 500 : 0,
                        width: "100%",
                        textAlign: "left",
                      }}
                    >
                      <div className="margin-bottom margin-small">
                        <div className="max-width-large">
                          <RichText
                            tagName="div"
                            value={item.content}
                            onChange={(val) =>
                              updateItem(index, "content", val)
                            }
                            placeholder="Accordion content"
                            style={{ textAlign: "left", width: "100%" }}
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="remove-accordion-item"
                        onClick={() => {
                          const updated = items.filter((_, i) => i !== index);
                          setAttributes({ items: updated });
                          if (openIndex === index) setOpenIndex(null);
                        }}
                        aria-label="Remove accordion item"
                        style={{
                          marginLeft: 8,
                          color: "red",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        &minus;
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="add-accordion-item"
                  onClick={() => {
                    const updated = [
                      ...items,
                      {
                        label: "New Accordion",
                        content: "Accordion content...",
                      },
                    ];
                    setAttributes({ items: updated });
                    setOpenIndex(updated.length - 1);
                  }}
                  style={{
                    marginTop: 16,
                    padding: "8px 16px",
                    background: "#5B57A2",
                    color: "#fff",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: 16,
                    width: "fit-content",
                    alignSelf: "flex-start",
                  }}
                >
                  + Add Accordion
                </button>
              </div>
              <div
                className="max-width-medium margin-top margin-xxlarge"
                style={{ textAlign: "left", width: "100%" }}
              >
                <div className="margin-bottom margin-xsmall">
                  <h3
                    className="heading-style-h4"
                    style={{ textAlign: "left", width: "100%" }}
                  >
                    Ready to get to know more?
                  </h3>
                </div>
                <p
                  className="text-size-medium"
                  style={{ textAlign: "left", width: "100%" }}
                >
                  Our forum, OpenMRS Talk is a great way to introduce yourself
                  and understand what we're working on.
                </p>
                <div className="margin-top margin-medium">
                  <div
                    className="button-group"
                    style={{ justifyContent: "flex-start", width: "100%" }}
                  >
                    <a
                      href="#"
                      className="button is-link is-icon w-inline-block"
                    >
                      <div>Go to OpenMRS&nbsp;Talk</div>
                      <div className="icon-embed-xxsmall w-embed">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0L13.293 3.293L6.29303 10.293L7.70703 11.707L14.707 4.707L18 8V0H10Z"
                            fill="#007FFF"
                          ></path>
                          <path
                            d="M16 16H2V2H9L7 0H2C0.897 0 0 0.897 0 2V16C0 17.103 0.897 18 2 18H16C17.103 18 18 17.103 18 16V11L16 9V16Z"
                            fill="#007FFF"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  save: ({ attributes }) => {
    const {
      title,
      description,
      items,
      breadcrumb1,
      breadcrumb1Url,
      breadcrumb2,
      breadcrumb2Url,
      breadcrumbCurrent,
    } = attributes;
    return (
      <div className="container-large">
        <div className="padding-section-large border-top-16px border-purple">
          <div className="header44_component">
            <div className="max-width-large">
              <div
                className="margin-bottom margin-xsmall flex align-middle _8px-gap"
                style={{
                  justifyContent: "flex-start",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                <RichText.Content
                  tagName="a"
                  className="text-style-breadcrumb"
                  value={breadcrumb1}
                  href={breadcrumb1Url}
                  style={{ textAlign: "left" }}
                />
                <div className="code-icon is-small w-embed">
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.70697 11.9496L7.41397 6.24264L1.70697 0.535645L0.292969 1.94964L4.58597 6.24264L0.292969 10.5356L1.70697 11.9496Z"
                      fill="#666666"
                    ></path>
                  </svg>
                </div>
                <RichText.Content
                  tagName="a"
                  className="text-style-breadcrumb"
                  value={breadcrumb2}
                  href={breadcrumb2Url}
                  style={{ textAlign: "left" }}
                />
                <div className="code-icon is-small w-embed">
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.70697 11.9496L7.41397 6.24264L1.70697 0.535645L0.292969 1.94964L4.58597 6.24264L0.292969 10.5356L1.70697 11.9496Z"
                      fill="#666666"
                    ></path>
                  </svg>
                </div>
                <RichText.Content
                  tagName="a"
                  className="text-style-breadcrumb is-current"
                  value={breadcrumbCurrent}
                  href="#"
                  style={{ textAlign: "left" }}
                />
              </div>
              <div className="margin-bottom margin-small">
                <RichText.Content
                  tagName="h1"
                  className="heading-style-h1 text-color-scampi"
                  value={title}
                  style={{ textAlign: "left", width: "100%" }}
                />
              </div>
              <RichText.Content
                tagName="p"
                className="text-size-medium"
                value={description}
                style={{ textAlign: "left", width: "100%" }}
              />
            </div>
            <div className="max-width-large">
              <div className="w-layout-grid faq5_list margin-top margin-xxlarge">
                {items.map((item, index) => (
                  <div className="faq5_accordion" key={index}>
                    <div
                      className="faq5_question"
                      style={{
                        userSelect: "none",
                        width: "100%",
                        textAlign: "left",
                      }}
                    >
                      <div
                        className="display-inlineflex"
                        style={{
                          justifyContent: "flex-start",
                          width: "100%",
                          textAlign: "left",
                        }}
                      >
                        <span
                          className="code-icon w-embed"
                          style={{ marginRight: "0.75rem" }}
                        >
                          <svg
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 0H2C0.897 0 0 0.897 0 2V16C0 17.103 0.897 18 2 18H18C19.103 18 20 17.103 20 16V2C20 0.897 19.103 0 18 0ZM2 16V4H18L18.002 16H2Z"
                              fill="#5B57A2"
                            ></path>
                            <path
                              d="M7.293 6.29297L3.586 9.99997L7.293 13.707L8.707 12.293L6.414 9.99997L8.707 7.70697L7.293 6.29297ZM12.707 6.29297L11.293 7.70697L13.586 9.99997L11.293 12.293L12.707 13.707L16.414 9.99997L12.707 6.29297Z"
                              fill="#5B57A2"
                            ></path>
                          </svg>
                        </span>
                        <span
                          className="text-size-medium text-weight-semibold"
                          style={{ textAlign: "left", width: "100%" }}
                        >
                          {item.label}
                        </span>
                      </div>
                      <div className="faq5_icon-wrapper">
                        <span className="icon-embed-small w-embed">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div
                      className="faq5_answer"
                      style={{ width: "100%", textAlign: "left" }}
                    >
                      <div className="margin-bottom margin-small">
                        <div className="max-width-large">
                          <RichText.Content
                            tagName="div"
                            value={item.content}
                            style={{ textAlign: "left", width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="max-width-medium margin-top margin-xxlarge"
                style={{ textAlign: "left", width: "100%" }}
              >
                <div className="margin-bottom margin-xsmall">
                  <h3
                    className="heading-style-h4"
                    style={{ textAlign: "left", width: "100%" }}
                  >
                    Ready to get to know more?
                  </h3>
                </div>
                <p
                  className="text-size-medium"
                  style={{ textAlign: "left", width: "100%" }}
                >
                  Our forum, OpenMRS Talk is a great way to introduce yourself
                  and understand what we’re working on.
                </p>
                <div className="margin-top margin-medium">
                  <div
                    className="button-group"
                    style={{ justifyContent: "flex-start", width: "100%" }}
                  >
                    <a
                      href="#"
                      className="button is-link is-icon w-inline-block"
                    >
                      <div>Go to OpenMRS&nbsp;Talk</div>
                      <div className="icon-embed-xxsmall w-embed">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0L13.293 3.293L6.29303 10.293L7.70703 11.707L14.707 4.707L18 8V0H10Z"
                            fill="#007FFF"
                          ></path>
                          <path
                            d="M16 16H2V2H9L7 0H2C0.897 0 0 0.897 0 2V16C0 17.103 0.897 18 2 18H16C17.103 18 18 17.103 18 16V11L16 9V16Z"
                            fill="#007FFF"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
